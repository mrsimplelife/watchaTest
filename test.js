require("dotenv").config();
// 구글에서 만든 크롤링 패키지
const puppeteer = require("puppeteer");

(async () => {
  // 크롬 브라우저 오픈(cli 환경에서는 밑에 { headless: false } 없이 실행시키면 될거 같음)
  const browser = await puppeteer.launch({ headless: false });
  // 새 페이지? 모름 있어서 걍 넣음.
  const page = await browser.newPage();
  // 여기서 부터는 각 왓챠 넷플릭스 티빙들 url 및 querySelector 변경 필요
  // 왓챠 로그인 페이지 이동
  await page.goto("https://watcha.com/sign_in");
  // 이메일 입력
  await page.type('input[name="email"]', process.env.WATCHA_ID);
  // 패스워드 입력
  await page.type('input[name="password"]', process.env.WATCHA_PASSWORDPWD);
  // 로그인 클릭
  await page.click('button[type="submit"]');
  // 밑에서 부터는 로그인 됐으니 영화 검색등 로직 이어서 하면 될듯...
  // .....
})();
