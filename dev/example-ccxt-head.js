"use strict";

const ccxt = require("ccxt");
require("dotenv").config();

// I n s t a n t i a t e  T h e  E x c h a n g e :
const exchangeId = 'binance',
exchangeClass = ccxt[exchangeId],
exchange = new exchangeClass({
  apiKey: process.env.SANDBOX_APIKEY,
  secret: process.env.SANDBOX_SECRET,
  //verbose: process.argv.includes ('--verbose'),
  verbose: false,
  timeout: 30000,
  enableRateLimit: true,
});

// S a n d b o x  M o d e :
exchange.setSandboxMode(true);

module.exports = head;

/*
(async () => {
  try{
    let markets = await exchange.load_markets();//<------can we just load binance?




  } catch (e) {
    if (e instanceof ccxt.NetworkError) {
      console.log("fetchTicker failed due to a network error:", e.message);
    } else if (e instanceof ccxt.ExchangeError) {
      console.log("fetchTicker failed due to exchange error:", e.message);
    } else {
      console.log("fetchTicker failed with:", e.message);
    }
  }
})();

*/