import axios from 'axios'
import cheerio from 'cheerio'


export default async (req, res) => {
    const url = `https://twitter.com/${req.query.name}`

    const { data: _HTML } = await axios.get(url)

    const $ = cheerio.load(_HTML);
    const ele = $(`.tweet .content`)
    const tweets = []
    ele.map(tweet => {
        const acc = cheerio.load(ele[tweet])
        const header = acc('.stream-item-header .avatar,.FullNameGroup strong.fullname,small.time a span._timestamp ').toArray();
        const body = acc('.js-tweet-text-container p.TweetTextSize')
        try {
            tweets.push({
                name: header[1].childNodes[0].data,
                img: header[0].attribs.src,
                date: header[2].childNodes[0].data,
                tweet: body.text()
            })
        } catch (error) {

        }
    })

    setTimeout(() => {
        res.send(tweets)
    }, 5000)
}