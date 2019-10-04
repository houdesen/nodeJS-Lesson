const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");
const cheerio = require("cheerio");

http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathName = urlObj.pathname;
   if(pathName == "/"){
      var htmlContent = fs.readFileSync("index.html");
   
      res.writeHead(200,["Content-Type","text/html"]);
      res.write(htmlContent);
      res.end();
   } else if (pathName == "/getlist"){
      https.get("https://maoyan.com/films",function(resObj){
         var result = "";
         resObj.on("data",function(chunk){
            result += chunk;
         })
         resObj.on("end",function(){
            var $ = cheerio.load(result);
            var moveList = [];
            $(".movie-item-title a").each(function(){
               var movie = {};
               movie.movieId = $(this).attr("data-val");
               movie.movieName = $(this).text();
               if(isNaN(parseInt($(this).parent().next() == undefined))){
                  movie.movieRange = "暂无评分";
               }
            })
         })
         var resultList = JSON.stringify(result);
         res.end(resultList);
      })
   }


    
}).listen(8081);