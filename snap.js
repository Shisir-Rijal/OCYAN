const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(process.argv[2] || "http://localhost:3001", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: process.argv[3] || "current-screenshot.png", fullPage: true });
  await browser.close();
  console.log("OK");
})();
