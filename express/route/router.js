
var express=require("express");
var router=express.Router();
var path=require("path");
var __dirname="D:\react+node\ap\sumit\express\public";

router.get('/user',(req,res)=>{
    res.send("working");
    });

    module.exports=router;