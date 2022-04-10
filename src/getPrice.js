const axios = require('axios');
const cheerio = require('cheerio');

const getPrices = async () => {
	try {
		const response = await axios.get('https://old.reddit.com/r/DunderMifflin/');

        const html = response.data;

		const $ = cheerio.load(html);

		const titles = [];

		$('div > p.title > a').each((_idx, el) => {
			const title = $(el).text()
			titles.push(title)
		});

		return titles;
	} catch (error) {
		throw error;
	}
};

getPrices().then((titles) => console.log(titles));
/*import puppeteer from 'puppeteer-web';

function getPrice(title, number) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        await page.goto(`https://www.mycomicshop.com/search?q=${title}+${number}&pubid=&PubRng=`);
        console.log('await is working')
        const mycomictext = await page.$eval('.hasscan', (el) => el.innerText);
        console.log(mycomictext)
    
        await page.goto(`https://www.midtowncomics.com/search?rel=&cfr=t&cat=&q=${title}+${number}`);
        console.log('await is working')
        const midtownText = await page.$eval('.pc-discounted', (el) => el.innerText);
        console.log(midtownText)
        await browser.close();
    
        let newPrice = Number(midtownText.split("$").pop()) + Number(mycomictext.split("$").pop());
        return newPrice/2;
    })();
}*/

export default getPrice()