var express     = require("express");
var bodyParser  = require("body-parser");
var cors        = require("cors");
var useragent   = require("express-useragent");
var app         = module.exports = express();


app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express()); //use to easy read user agent in json format

app.get("/",function(req,res,next){
    var lang    = req.acceptsLanguages;
    var os      = req.useragent.os;
    var browser = req.useragent.browser;
    var version = req.useragent.version
    var ip      = req.ip;
    console.log("home page working");
    res.json({
        "ip address":ip,
        "lang": lang[0],
        "browser": browser,
        "os": os,
    });
})

app.listen(3000 || process.env.PORT, function(){
    console.log("Working");
})