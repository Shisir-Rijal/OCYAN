const { chromium, devices } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    ...devices["iPhone 13"],
  });
  const page = await ctx.newPage();
  await page.goto(process.argv[2] || "http://localhost:3001", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: process.argv[3] || "mobile-screenshot.png", fullPage: true });
  await browser.close();
  console.log("OK");
})();
