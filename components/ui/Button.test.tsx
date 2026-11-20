import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import Button from "./Button";

afterEach(cleanup);

it("defaults to a non-submit button inside a form", () => {
  const onSubmit = vi.fn();
  const onClick = vi.fn();

  render(
    <form onSubmit={onSubmit}>
      <Button onClick={onClick}>Play</Button>
    </form>,
  );

  const button = screen.getByRole("button", { name: "Play" });

  expect(button.getAttribute("type")).toBe("button");

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledOnce();
  expect(onSubmit).not.toHaveBeenCalled();
});
