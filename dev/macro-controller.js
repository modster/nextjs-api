/** 
 * M A C R O   C O N T R O L L E R 
 * Make a MA ribbon in Pine and send this endpoint 'buy', 'hold', or 'sell'
 * Update a json file with fs and make the endpoints check it to see what
 * state our position is in.
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