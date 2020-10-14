const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('https://app.slack.com/workspace-signin', {waitUntil: 'networkidle2', timeout: 0});
//await page.waitForNavigation({waitUntil: 'networkidle2'})
//await page.screenshot({path: 'example.png'});
await page.type('input[name=domain]', 'exonhost')
//await page.type('input[name=q]', 'noman')
await page.keyboard.press('Enter');
await page.waitForNavigation({waitUntil: 'networkidle2', timeout: 0})
await page.type('input[name=email]', 'abdullah.ssc13@gmail.com')
await page.type('input[name=password]', 'mamun017508')
await page.keyboard.press('Enter');

try {
    await page.waitForNavigation({waitUntil: 'networkidle2'})
    console.log('try');
} catch {
    console.log('catch');
}

console.log('ia');
await page.click('div.c-texty_input__container.c-texty_input__container--multi_line');
console.log('last');
// await page.keyboard.press('ArrowLeft');
await page.keyboard.type('/atlog in');
await page.keyboard.press('Enter');
// await page.mouse.down();
// await page.mouse.move(345, 680);
// await page.mouse.up();