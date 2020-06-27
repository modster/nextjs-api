/**  
 * B U Y  S P O T
 * When fired this endpoint buys a fixed amout of BTC on Binance's spot exchange.
*/
export default (req, res) => {
  if (req.method === 'POST') {
    // Retrieve the request's body and parse it as JSON
    var postData = req.body;
    // or:
    // var postData = JSON.parse(req.body);

    // do stuff
    console.log(postData);

    // response
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(postData))
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: '200' }))
  }
}