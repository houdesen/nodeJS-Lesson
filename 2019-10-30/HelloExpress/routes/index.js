var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next){
  /**
   * render页面渲染
   * 读取ejs文件内容，将文件中的占位符(<%=userName%>)
   * 替换成后端给定的数据(也就是render的第二个参数)
   * 再将文件中的代码内容响应到客户端去
   */
  res.render('list',{'userName':"zhangsan",newList:[
    {"newId":1,"newTitle":"人民"},
    {"newId":2,"newTitle":"我们"}
  ]});
  // res.end("hello express");
})

router.get('/index/list',function(req,res,next){
  res.end("list");
})

module.exports = router;
