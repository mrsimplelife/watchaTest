require("dotenv").config();

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://watcha.com/sign_in");
  await page.type('input[name="email"]', process.env.WATCHA_ID);
  await page.type('input[name="password"]', process.env.WATCHA_PASSWORDPWD);
  await page.click('button[type="submit"]');
})();
