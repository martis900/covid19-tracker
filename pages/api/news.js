import axios from 'axios'
import cheerio from 'cheerio'


export default async (req, res) => {
    let url = 'https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZqY0hsNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen';
    if (req.query.type === 'latest') {
        url = 'https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZqY0hsNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen'
    }
    else if (req.query.type === 'stocks') {
        url = 'https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR1J5Y1hBU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen'
    }
    else if (req.query.type === 'gaming') {
        url = 'https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0ZHpFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen'
    }


    const { data: _HTML } = await axios.get(url)

    const $ = cheerio.load(_HTML, {
        normalizeWhitespace: true,
        xmlMode: true
    });

    let HTML = []
    $(`.xrnccd`).map(function () {
        try {
            const link = $(this).find('h3 a').attr('href');
            const headline = $(this).find('h3 a').text();
            let media = $(this).find('figure img').attr('src');
            if (!media) {
                media = $(this).siblings().find('figure img').attr('src')
            }
            const time = $(this).find('time').first().text();
            const publication = $(this).find(`[jsname="Hn1wIf"] a`).first().text();
            HTML.push({
                link: `https://news.google.com/${link}`,
                media,
                headline,
                time,
                publication
            });
        }
        catch (error) {

        }
    })

    setTimeout(() => {
        res.send(HTML)
    }, 200)
}