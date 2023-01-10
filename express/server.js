var express=require("express");
var app=express();
var path =require("path");
var json=express.json();
var routes=require("./route/router")

app.use(express.static(path.join(__dirname,'/public')));


   
app.use(json);
app.use('/',routes);
app.listen(4000,()=>{console.log("4000 working~!")});
module.exports=app;