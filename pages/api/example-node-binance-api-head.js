const ccxt = require ('node-binance-api')

// I n s t a n t i a t e  T h e  E x c h a n g e  C l s s
const binance = new Binance().options({
  APIKEY: process.env.BINANCE_APIKEY,
  APISECRET: process.env.BINANCE_SECRET,
  useServerTime: true,
  recvWindow: 4000,
  verbose: false,
  test: true,//----------------------------------------! test mode
  reconnect: true
});

//  T e s t  M o d e
console.log ("Test Mode: ", binance.getOption('test'));