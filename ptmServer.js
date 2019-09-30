var request=require('request');
var express = require('express')

var app = express();
var url="https://ryul-k.github.io/Express/2.html";

request(url, function(err, res, body){
  console.log(body);

})

http.createServer(app).listen(3000, function(){
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});
