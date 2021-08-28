const puppeteer = require('puppeteer');

(async () => {

    const accounts = [{userName: 'mamun007', password: 'mamun.me.417'}, {userName: 'mamun009', password: '121212'}];

    // for (const acc of accounts) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://digitalit.app/', {waitUntil: 'networkidle2', timeout: 0});
//await page.waitForNavigation({waitUntil: 'networkidle2'})
    await page.type('input[name=username]', 'mamun007')
    await page.type('input[name=password]', 'mamun.me.417')
    // await page.screenshot({path: 'example.png'});

    await page.keyboard.press('Enter');
    await page.waitForNavigation({waitUntil: 'networkidle2', timeout: 0})
    await page.goto('https://digitalit.app/hourly-income', {waitUntil: 'networkidle2', timeout: 0});
    await page.goto('https://digitalit.app/logout', {waitUntil: 'networkidle2', timeout: 0});

//     }    console.log('ia');
//     await page.click('div.c-texty_input__container.c-texty_input__container--multi_line');
//     console.log('last');
// // await page.keyboard.press('ArrowLeft');
//     await page.keyboard.type('/atlog in');
// //await page.keyboard.press('Enter');
// // await page.mouse.down();
// // await page.mouse.move(345, 680);
// // await page.mouse.up();


})();
