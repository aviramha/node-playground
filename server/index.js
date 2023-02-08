const express = require('express')
const app = express()
const port = 80



app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Hello World!")
})

var server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.keepAliveTimeout = 30000; 
// Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
server.headersTimeout = 31000; 
// Ensure the headersTimeout is set higher than the keepAliveTimeout due to this nodejs regression bug: https://github.com/nodejs/node/issues/27363