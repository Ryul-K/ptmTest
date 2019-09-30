var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , request = require('request');

var url="https://ryul-k.github.io/Express/2.html";

request(url, function(err, res, body){
  console.log(body);

})


// app.get('/',function(req,res){
//   ...
// })

server.listen(8000,'https://34.84.99.174/',function(){
 server.close(function(){
   server.listen(8001,'/')
 })
})
