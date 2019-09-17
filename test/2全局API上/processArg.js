var arg1 = process.argv[2];
 if(arg1 == undefined || arg1 == "-h"){
     console.log("命令行的参数错误!!!");
 } else{
     var result = eval(arg1);
     console.log(arg1 + "=%s",result);
 }