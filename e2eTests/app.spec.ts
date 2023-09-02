import { expect, test } from "@playwright/test";

test("displaying the app", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("React App Template");
});
