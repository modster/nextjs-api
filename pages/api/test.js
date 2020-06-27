const Binance = require ('node-binance-api')

export default (req, res) => {
  try{
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
    // console.log ("Test Mode: ", binance.getOption('test'));
    
    // V a r i a b l e s
    const symbol = 'BTCUSDT'
    const qtyBtc = '0.05' 
    let postData = req.body
    console.log(postData)
    console.info( await binance.futuresMarketBuy( symbol, qtyBtc ) )
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end()
  } catch (e) {
    console.log("spot exchange market buy order failed with: ", e.message)
}
}