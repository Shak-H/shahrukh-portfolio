"use client";

import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";

import Button from "@/components/ui/Button";

type Shot = {
  outcome: ShotResult;
  shotDirection: Direction;
  keeperDirection: Direction;
};

const directions = ["Left", "Centre", "Right"] as const;

type Direction = (typeof directions)[number];

function pickKeeperDirection() {
  const index = Math.floor(Math.random() * directions.length);
  return directions[index];
}

function handleDirectionKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
) {
  const { key } = event;

  if (key !== "ArrowLeft" && key !== "ArrowRight" && key !== "ArrowUp") {
    return;
  }

  event.preventDefault();

  const nextIndex =
    key === "ArrowUp"
      ? directions.indexOf("Centre")
      : (index + (key === "ArrowLeft" ? -1 : 1) + directions.length) %
        directions.length;

  const buttons = event.currentTarget.parentElement?.querySelectorAll("button");
  buttons?.[nextIndex]?.focus();
}

const goalPositions: Record<Direction, string> = {
  Left: "35%",
  Centre: "50%",
  Right: "65%",
};

type ShotResult = "goal" | "saved";

export default function PenaltyShootout() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shots, setShots] = useState<Shot[]>([]);
  const [isShowingShot, setIsShowingShot] = useState(false);
  const lastShot = shots.at(-1);
  const result = lastShot?.outcome;
  const isRoundOver = shots.length >= 3;
  const displayedShot = isShowingShot ? lastShot : undefined;
  const keeperDirection = displayedShot?.keeperDirection ?? "Centre";
  const firstDirectionRef = useRef<HTMLButtonElement>(null);
  const playAgainRef = useRef<HTMLButtonElement>(null);

  const handleShot = (direction: Direction) => {
    if (isShowingShot || isRoundOver) return;

    const keeperDirection = pickKeeperDirection();
    const outcome: ShotResult =
      direction === keeperDirection ? "saved" : "goal";

    setShots((prevShots) => [
      ...prevShots,
      { outcome, keeperDirection, shotDirection: direction },
    ]);
    setIsShowingShot(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    if (isRoundOver) {
      playAgainRef.current?.focus();
    } else {
      firstDirectionRef.current?.focus();
    }
  }, [isPlaying, isRoundOver]);

  useEffect(() => {
    if (!isShowingShot) return;

    const timeoutId = window.setTimeout(() => {
      setIsShowingShot(false);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [isShowingShot]);

  return (
    <div>
      <div className="bg-[url('/floodlit-pitch.png')] aspect-3/2 relative rounded-xl bg-cover bg-center bg-slate-900 p-4 text-white">
        <p className="w-fit rounded bg-black/10 px-3 py-1 text-sm font-semibold text-white">
          Penalty Shootout
        </p>

        {isPlaying && (
          <>
            <span
              aria-hidden="true"
              className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white motion-safe:transition-[left, top] motion-safe:duration-200 motion-safe:ease-out"
              style={
                displayedShot
                  ? {
                      left: goalPositions[displayedShot.shotDirection],
                      top: "60%",
                    }
                  : { left: "50%", top: "76%" }
              }
            />
            <span
              aria-hidden="true"
              className="absolute top-[55%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 motion-safe:transition-[left] motion-safe:duration-200 motion-safe:ease-out"
              style={{ left: goalPositions[keeperDirection] }}
            />
          </>
        )}
      </div>

      <ol aria-label="Shot results" className="mt-4 flex justify-center gap-2">
        {Array.from({ length: 3 }, (_, index) => {
          const outcome = shots[index]?.outcome;

          const indicator = outcome
            ? outcome === "goal"
              ? { symbol: "✓", label: "Goal", colour: "bg-green-500" }
              : { symbol: "×", label: "Saved", colour: "bg-red-500" }
            : { symbol: "–", label: "Not taken yet", colour: "bg-gray-300" };

          return (
            <li key={index}>
              <span
                aria-hidden="true"
                className={`inline-flex size-6 items-center justify-center rounded-full font-bold text-slate-950 ${indicator.colour}`}
              >
                {indicator.symbol}
              </span>
              <span className="sr-only">
                Shot {index + 1}: {indicator.label}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex justify-center">
        {isPlaying ? (
          <div className="grid w-full max-w-xs gap-2">
            <div className="grid grid-cols-3 gap-2">
              {directions.map((direction, index) => (
                <Button
                  key={direction}
                  ref={index === 0 ? firstDirectionRef : undefined}
                  variant="secondary"
                  size="compact"
                  className="bg-slate-900 aria-disabled:cursor-not-allowed"
                  onKeyDown={(event) => handleDirectionKeyDown(event, index)}
                  onClick={() => handleShot(direction)}
                  disabled={isRoundOver}
                  aria-disabled={isRoundOver || isShowingShot}
                >
                  {direction}
                </Button>
              ))}
            </div>

            <p className="text-center text-xs leading-relaxed text-slate-300">
              <kbd>←</kbd> / <kbd>→</kbd> to aim · <kbd>↑</kbd> for centre ·{" "}
              <kbd>Enter</kbd> / <kbd>Space</kbd> to shoot
            </p>
          </div>
        ) : (
          <Button onClick={() => setIsPlaying(true)}>Take a shot</Button>
        )}
      </div>

      <p role="status" className="text-center mt-4 text-lg font-semibold">
        {result && `${result === "goal" ? "Goal!" : "Saved!"}`}
      </p>

      {isRoundOver && (
        <div className="mt-4 flex justify-center">
          <Button
            ref={playAgainRef}
            onClick={() => {
              setShots([]);
              setIsShowingShot(false);
            }}
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
}
