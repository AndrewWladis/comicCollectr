const axios = require('axios');
const cheerio = require('cheerio');

function getPrice(comic, number) {
    comic.split(' ')
    for (let i = 0; i < comic.length) {
        
    }
    if (comic[i] != '+') {

    }
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