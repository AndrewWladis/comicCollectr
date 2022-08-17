const axios = require('axios');
const cheerio = require('cheerio');

function getPrice(comic, number) {
    let comicWithPlus = comic;
    console.log('comic with plus is ', comicWithPlus)
    comicWithPlus.split(' ');

    let i = 0;
    do {
        if (comic[i] != '+') {
            comicWithPlus.splice(1, 0, 'Feb');
        }
        i++
    } while (i < comicWithPlus.length);

    const getPostTitles = async () => {
        try {
            const { data } = await axios.get(
                `https://www.mycomicshop.com/search?q=The+Flash+${number}&pubid=&PubRng=`
            );
            const $ = cheerio.load(data);
            const postTitles = [];
    
            postTitles.push($('.hasscan'))
    
            return postTitles;
        } catch (error) {
            throw error;
        }
    };
    
    let price = getPostTitles()
    .then((postTitles) => console.log(postTitles));
    return price
}


export default getPrice()