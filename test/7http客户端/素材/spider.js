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
   } else if (pathName == "/getList"){
      https.get("https://maoyan.com/films",function(resObj){
         var result = "";
         resObj.on("data",function(chunk){
            result += chunk;
         })
         resObj.on("end",function(){
            var $ = cheerio.load(result);
            var movieList = [];
            $(".board-wrapper dd a").each(function(){
               var movie = {};
               movie.movieId = $(this).attr("data-val");
               movie.movieName = $(this).text();
               var num = $(this).next().children[0].children[1].children[0].children[0]+$(this).next().children[0].children[1].children[0].children[1];
               if(isNaN(parseInt(num == undefined))){
                  movie.movieRange = "暂无评分";
               }else{
                  movie.movieRange = num;
               }
               movieList.push(movie);
               movieList = JSON.stringify(movieList);
               console.log(movieList);
               req.end(movieList);
            })
         })
      })
   }
   // req.end(movieList);

    
}).listen(8081);