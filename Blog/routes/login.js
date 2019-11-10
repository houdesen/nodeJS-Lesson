var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/list',function(req,res,next){
  var userPath = path.join(__dirname,"../data.json");
  var userContent =  fs.readFileSync(userPath,'utf8');
  var userData = JSON.parse(userContent.toString());
  console.log(userData.users[0].username);
  console.log(req.body.username);
  if(userData.users[0].username == req.body.username && userData.users[0].password == req.body.password){
    res.render('list',{chapterList:userData.chapterList});
  } else {
    res.send("用户名密码错误");
  }
});

module.exports = router;
