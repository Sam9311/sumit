var express= require("express");
var app = express();
var path=require("path");
var router=require("./routes/routers");


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use('/',router);
app.listen(4000,()=>{console.log("the port is started on 4000")});
module.exports=app;