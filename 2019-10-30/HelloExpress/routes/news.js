var express = require("express");
var router = express.Router();

router.get('/',function(req,res,){
    res.end("this is news");
})


module.exports = router;