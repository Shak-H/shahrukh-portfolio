import { expect, test } from "@playwright/test";

const cases = [
  { width: 375, placement: "below" },
  { width: 376, placement: "right" },
  { width: 530, placement: "right" },
  { width: 531, placement: "centre" },
];

for (const { width, placement } of cases) {
  test(`positions the start button ${placement} at ${width}px and starts the game`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const start = page.getByRole("button", {
      name: "Play shootout",
      exact: true,
    });
    await expect(start).toHaveCount(1);
    await expect(start).toBeVisible();

    const pitch = await page.getByTestId("shootout-pitch").boundingBox();
    const button = await start.boundingBox();

    if (!pitch || !button) {
      throw new Error("The pitch and start button must be visible");
    }

    const buttonCentre = button.x + button.width / 2;
    const pitchCentre = pitch.x + pitch.width / 2;

    if (placement === "below") {
      expect(button.y).toBeGreaterThanOrEqual(pitch.y + pitch.height);
    } else {
      expect(button.y).toBeGreaterThanOrEqual(pitch.y + pitch.height / 2);
      expect(button.y + button.height).toBeLessThan(pitch.y + pitch.height);
    }

    if (placement === "right") {
      const rightInset = pitch.x + pitch.width - button.x - button.width;
      expect(rightInset).toBeGreaterThanOrEqual(0);
      expect(rightInset).toBeLessThanOrEqual(16);
      expect(buttonCentre).toBeGreaterThan(pitchCentre);
    } else {
      expect(Math.abs(buttonCentre - pitchCentre)).toBeLessThanOrEqual(2);
    }

    await start.click();
    await expect(start).toHaveCount(0);

    for (const name of ["Left", "Centre", "Right"]) {
      await expect(
        page.getByRole("button", { name, exact: true }),
      ).toBeVisible();
    }
  });
}
