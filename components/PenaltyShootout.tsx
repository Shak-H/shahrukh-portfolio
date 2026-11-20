"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Button from "@/components/ui/Button";

const directions = ["Left", "Centre", "Right"] as const;
const maxShots = 3;

type Direction = (typeof directions)[number];
type ShotResult = "goal" | "saved";

type Shot = {
  outcome: ShotResult;
  shotDirection: Direction;
  keeperDirection: Direction;
};

const goalPositions: Record<Direction, string> = {
  Left: "27%",
  Centre: "50%",
  Right: "73%",
};

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
  buttons?.[nextIndex]?.focus({ preventScroll: true });
}

export default function PenaltyShootout() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shots, setShots] = useState<Shot[]>([]);
  const [isShowingShot, setIsShowingShot] = useState(false);

  const lastShot = shots.at(-1);
  const result = lastShot?.outcome;
  const goals = shots.filter((shot) => shot.outcome === "goal").length;
  const isRoundOver = shots.length >= maxShots;
  const isReplayReady = isRoundOver && !isShowingShot;
  const displayedShot = isShowingShot ? lastShot : undefined;
  let shotBallTop = "60%";

  if (displayedShot?.outcome === "saved") {
    shotBallTop = "54%"; // Bring side saves up to glove height.
  } else if (displayedShot?.shotDirection === "Centre") {
    shotBallTop = "50%"; // Put a centre goal higher in the net.
  }
  const keeperDirection = displayedShot?.keeperDirection ?? "Centre";
  const isDiving = keeperDirection !== "Centre";
  const isCentreSave =
    displayedShot?.outcome === "saved" && keeperDirection === "Centre";

  const keeperImage = isDiving
    ? "bg-[url('/goalkeeper-dive.webp')]"
    : isCentreSave
      ? "bg-[url('/goalkeeper-catch.webp')]"
      : "bg-[url('/goalkeeper.webp')]";

  const keeperSize = isDiving ? "h-[16%] w-[23%]" : "h-[17%] w-[14%]";
  const keeperLeft =
    keeperDirection === "Left"
      ? "37%"
      : keeperDirection === "Right"
        ? "63%"
        : "50%";

  const firstDirectionRef = useRef<HTMLButtonElement>(null);
  const playAgainRef = useRef<HTMLButtonElement>(null);
  const directionControlsRef = useRef<HTMLDivElement>(null);
  const shouldFocusReplayRef = useRef(false);

  function handleShot(direction: Direction) {
    if (isShowingShot || isRoundOver) return;

    const keeperDirection = pickKeeperDirection();
    const outcome: ShotResult =
      direction === keeperDirection ? "saved" : "goal";

    setShots((previousShots) => [
      ...previousShots,
      { outcome, keeperDirection, shotDirection: direction },
    ]);
    setIsShowingShot(true);
  }

  function handleReplay() {
    setShots([]);
    setIsShowingShot(false);
  }

  useEffect(() => {
    if (!isPlaying) return;

    if (isReplayReady) {
      if (shouldFocusReplayRef.current) {
        playAgainRef.current?.focus({ preventScroll: true });
      }
      return;
    }

    firstDirectionRef.current?.focus();
  }, [isPlaying, isReplayReady]);

  useEffect(() => {
    if (!isShowingShot) return;

    const timeoutId = window.setTimeout(
      () => {
        if (isRoundOver) {
          shouldFocusReplayRef.current =
            directionControlsRef.current?.contains(document.activeElement) ??
            false;
        }

        setIsShowingShot(false);
      },
      isRoundOver ? 1600 : 1200,
    );

    return () => window.clearTimeout(timeoutId);
  }, [isShowingShot, isRoundOver]);

  return (
    <>
      {/* Pitch and bottom fade */}
      <div
        data-testid="shootout-pitch"
        className="relative aspect-3/2 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 bg-[url('/floodlit-pitch.webp')] bg-cover bg-center text-white [@media(max-width:375px)]:mb-3"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950/85 to-transparent"
        />

        {/* Goalkeeper */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-[64%] -translate-x-1/2 -translate-y-full bg-contain bg-bottom bg-no-repeat drop-shadow-lg motion-safe:transition-[left] motion-safe:duration-200 motion-safe:ease-out ${keeperImage} ${keeperSize} ${
            keeperDirection === "Left" ? "-scale-x-100" : ""
          }`}
          style={{ left: keeperLeft }}
        />

        {/* Ball */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute size-4 -translate-x-1/2 -translate-y-1/2 bg-[url('/football.webp')] bg-contain bg-center bg-no-repeat drop-shadow-md [--ball-clearance:4.75rem] motion-safe:transition-[left,top] motion-safe:duration-200 motion-safe:ease-out sm:size-6 sm:[--ball-clearance:5.75rem] [@media(max-width:530px)]:[--ball-clearance:0rem] ${
            isCentreSave ? "invisible" : ""
          }`}
          style={
            displayedShot
              ? {
                  left: goalPositions[displayedShot.shotDirection],
                  top: shotBallTop,
                }
              : {
                  left: "50%",
                  top: isPlaying
                    ? "74%"
                    : "min(74%, calc(100% - var(--ball-clearance)))",
                }
          }
        />

        {/* Start button inside the pitch */}
        {!isPlaying && (
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center sm:bottom-6 [@media(max-width:530px)]:bottom-2 [@media(max-width:530px)]:justify-end [@media(max-width:530px)]:pr-2 [@media(max-width:375px)]:hidden">
            <Button onClick={() => setIsPlaying(true)}>Play shootout</Button>
          </div>
        )}

        {/* Scoreboard */}
        {isPlaying && (
          <ol
            aria-label="Shot results"
            className="absolute top-3 right-3 z-10 flex gap-1.5 rounded-lg border border-slate-600 bg-slate-950/90 p-1.5 sm:top-4 sm:right-4"
          >
            {Array.from({ length: maxShots }, (_, index) => {
              const outcome = shots[index]?.outcome;

              const indicator = outcome
                ? outcome === "goal"
                  ? { symbol: "✓", label: "Goal", colour: "bg-green-400" }
                  : { symbol: "×", label: "Saved", colour: "bg-red-400" }
                : {
                    symbol: "–",
                    label: "Not taken yet",
                    colour: "bg-slate-300",
                  };

              return (
                <li key={index}>
                  <span
                    aria-hidden="true"
                    className={`grid size-6 place-items-center rounded-full text-sm leading-none font-bold text-slate-950 ${indicator.colour}`}
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
        )}
      </div>

      {/* Start button below the pitch on narrow screens */}
      {!isPlaying && (
        <div className="mt-3 hidden justify-center [@media(max-width:375px)]:flex">
          <Button onClick={() => setIsPlaying(true)}>Play shootout</Button>
        </div>
      )}

      {/* Shot controls and Replay button */}
      {isPlaying && (
        <div className="mx-auto mt-4 grid w-full max-w-xs gap-2">
          {isReplayReady ? (
            <div className="flex justify-center">
              <Button ref={playAgainRef} onClick={handleReplay}>
                Play Again
              </Button>
            </div>
          ) : (
            <div ref={directionControlsRef} className="grid grid-cols-3 gap-2">
              {directions.map((direction, index) => (
                <Button
                  key={direction}
                  ref={index === 0 ? firstDirectionRef : undefined}
                  variant="secondary"
                  size="compact"
                  className="bg-slate-900 aria-disabled:cursor-not-allowed"
                  onKeyDown={(event) => handleDirectionKeyDown(event, index)}
                  onClick={() => handleShot(direction)}
                  aria-disabled={isShowingShot}
                >
                  {direction}
                </Button>
              ))}
            </div>
          )}

          {/* Keyboard instructions */}
          {!isRoundOver && (
            <p className="text-center text-xs leading-relaxed text-slate-300">
              <kbd>←</kbd> / <kbd>→</kbd> to aim · <kbd>↑</kbd> for centre ·{" "}
              <kbd>Enter</kbd> / <kbd>Space</kbd> to shoot
            </p>
          )}
        </div>
      )}

      {/* Shot result and final score announcements */}
      <p role="status" className="text-center text-lg font-semibold">
        {isReplayReady ? (
          <span className="sr-only">
            Round complete. {goals} {goals === 1 ? "goal" : "goals"} from{" "}
            {shots.length} shots.
          </span>
        ) : (
          result && (
            <span className="mt-3 block">
              {result === "goal" ? "Goal!" : "Saved!"}
              <span className="sr-only">
                {" "}
                Shot {shots.length} of {maxShots}.
              </span>
            </span>
          )
        )}
      </p>
    </>
  );
}
