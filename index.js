const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://app.slack.com/workspace-signin', {waitUntil: 'networkidle2'});
    //await page.waitForNavigation({waitUntil: 'networkidle2'})
    //await page.screenshot({path: 'example.png'});
    await page.type('input[name=domain]', 'exonhost')
    
    //await page.type('input[name=q]', 'noman')
    await page.keyboard.press('Enter');
    await page.waitForNavigation({waitUntil: 'networkidle2'})
    
    await page.type('input[name=email]', 'abdullah.ssc13@gmail.com')
    await page.type('input[name=password]', 'mamun017508')
    await page.keyboard.press('Enter');
    await page.waitForNavigation({waitUntil: 'networkidle2'})
    
    let [test] = await page.$x('/html/body/div[2]/div/div[2]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/p')
    await test.click()
    //let [gmail] = await page.$x("//*[@id=\"CBMKP2L6A\"]/a/span")
    //await gmail.click()
    
    //await browser.close();
})();//*[@id="gbw"]/div/div/div[1]/div[1]/a