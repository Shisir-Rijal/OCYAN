const { chromium, devices } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    ...devices["iPhone 13"],
  });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3001", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2000);

  // Get viewport height
  const vh = page.viewportSize().height;
  // Total page height
  const totalH = await page.evaluate(() => document.body.scrollHeight);

  // Take screenshots at intervals
  for (let i = 0, idx = 0; i < totalH; i += vh, idx++) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `mobile-sec-${idx}.png`, fullPage: false });
  }

  console.log("Total sections:", Math.ceil(totalH / vh));
  await browser.close();
})();
