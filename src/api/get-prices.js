const axios = require("axios")

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,binancecoin,tether,bitcoin-cash&vs_currencies=usd`)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
