import axios from 'axios'

export default async (req, res) => {
    axios.get('https://bing.com/covid/data').then(data => res.send(data.data))
}