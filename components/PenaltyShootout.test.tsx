import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import PenaltyShootout from "./PenaltyShootout";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

function startShootout() {
  render(<PenaltyShootout />);

  const [startButton] = screen.getAllByRole("button", {
    name: /^(take a shot|play shootout)$/i,
  });

  fireEvent.click(startButton);
}

it("shows results, blocks repeat shots during feedback, and resets on replay", () => {
  vi.useFakeTimers();
  startShootout();

  const left = screen.getByRole("button", { name: "Left" });
  const centre = screen.getByRole("button", { name: "Centre" });
  const status = screen.getByRole("status");

  // Make the keeper dive left on every shot.
  const random = vi.spyOn(Math, "random").mockReturnValue(0);

  fireEvent.click(left);
  expect(status.textContent).toContain("Saved!");

  fireEvent.click(centre);
  expect(screen.getByText("Shot 2: Not taken yet")).toBeTruthy();

  act(() => vi.advanceTimersByTime(1200));
  fireEvent.click(centre);
  expect(status.textContent).toContain("Goal!");

  act(() => vi.advanceTimersByTime(1200));
  fireEvent.click(centre);
  expect(status.textContent).toContain("Goal!");
  expect(screen.queryByRole("button", { name: /play again/i })).toBeNull();
  expect(random).toHaveBeenCalledTimes(3);

  act(() => vi.advanceTimersByTime(1600));
  fireEvent.click(screen.getByRole("button", { name: /play again/i }));

  expect(screen.getByText("Shot 1: Not taken yet")).toBeTruthy();
  expect(status.textContent).toBe("");
  expect(document.activeElement).toBe(
    screen.getByRole("button", { name: "Left" }),
  );
});

it("uses the arrow keys to move focus between shot directions", () => {
  startShootout();

  const left = screen.getByRole("button", { name: "Left" });
  const centre = screen.getByRole("button", { name: "Centre" });
  const right = screen.getByRole("button", { name: "Right" });

  expect(document.activeElement).toBe(left);

  fireEvent.keyDown(left, { key: "ArrowLeft" });
  expect(document.activeElement).toBe(right);

  fireEvent.keyDown(right, { key: "ArrowUp" });
  expect(document.activeElement).toBe(centre);

  fireEvent.keyDown(centre, { key: "ArrowRight" });
  expect(document.activeElement).toBe(right);
});
