
var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();
var fs = require("fs");
const { pathToFileURL } = require("url");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
var filepath=pathToFileURL("D:/downloads/Desktop/sumit.txt");
router.post('/employee', (req, res) => {
    const{ name }=req.body;
    fs.appendFile(filepath,name, (err) => {
        if(err)
        console.log(err);
        console.log("this is successfully added in a file!!!");
        res.redirect('http://localhost:4000/user');
        //res.send("wooahhhh!"+fs.readFileSync(filepath, "utf8"));
        
    });
});

router.post('/user', (req, res) => {
    res.send("okay better to be heard!!!");
});

router.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/user.html'));
});
console.log(fs.readFileSync(filepath, "utf8"));
router.get('/employee', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/employee.html'));
});

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
})




module.exports = router;
