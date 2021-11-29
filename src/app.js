const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');

const toi_url = 'https://timesofindia.indiatimes.com'
const toi_url_sports = 'https://timesofindia.indiatimes.com/sports'
const toi_url_business = 'https://timesofindia.indiatimes.com/business'

axios.get(toi_url)
    .then(res=>{
        const articles = [];
        const $ = cheerio.load(res.data);
        $('.col_l_6').each((i,elem)=>{
            if($(elem).children('._1Fkp2').children('._3SqZy').text() && $(elem).children('._1Fkp2').children('._3SqZy').attr('href')){
                articles.push({
                    title: $(elem).children('._1Fkp2').children('._3SqZy').text(),
                    link : $(elem).children('._1Fkp2').children('._3SqZy').attr('href'),
                    image : $(elem).find('img').attr('src')
                })
            }
        })
        console.log(articles)
    })
    .catch(e=>{
        console.log(e);
})


axios.get(toi_url_sports)
    .then(res=>{
        const articles = [];
        const $ = cheerio.load(res.data);
        $('.w_img').each((i,elem)=>{
            articles.push({
                title: $(elem).attr('title'),
                link : 'https://timesofindia.indiatimes.com' + $(elem).attr('href'),
                image : $(elem).find('img').attr('src')
            })
        })
        console.log(articles)
    })
    .catch(e=>{
        console.log(e);
})

axios.get(toi_url_business)
    .then(res=>{
        const articles = [];
        const $ = cheerio.load(res.data);
        $('.w_img').each((i,elem)=>{
            articles.push({
                title: $(elem).attr('title'),
                link : $(elem).attr('href'),
                image : $(elem).find('img').attr('src')
            })
        })
        console.log(articles)
    })
    .catch(e=>{
        console.log(e);
})