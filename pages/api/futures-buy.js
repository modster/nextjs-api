/** 
 * B U Y  F U T U R E S
 * When fired this endpoint buys a fixed amout of BTC on Binance's FUTURES exchange.
 */

// M o d u l e s
const Binance = require ('node-binance-api')

// V a r i a b l e s
const symbol = 'BTCUSDT'
const qtyBtc = '0.05' 

// I n s t a n t i a t e  T h e  E x c h a n g e  O b j e c t
const binance = new Binance().options({
  APIKEY: process.env.BINANCE_APIKEY,
  APISECRET: process.env.BINANCE_SECRET,
  useServerTime: true,
  recvWindow: 4000,
  verbose: false,
  test: true,//------------------------------------------------------test mode!
  reconnect: true
});

//  A r e  W e  I n  T e s t  M o d e ?
console.log ("Test Mode: ", binance.getOption('test'));

export default (req, res) => {
  // Retrieve the request's body and parse it as JSON
  let postData = req.body

  // TradingView Alerts are POST requests:
  if (req.method === 'POST') {
    try{
      console.log(postData)
      // Make sure your Tradingview Alerts are valid JSON.
      // Parse Alert:
      console.info( binance.futuresMarketBuy( symbol, qtyBtc ) )
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end()
    } catch (e) {
        console.log("spot exchange market buy order failed with: ", e.message)
    }
    // All other methods:
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    // Response echoes request:
    res.end(JSON.stringify(postData))
  }
}