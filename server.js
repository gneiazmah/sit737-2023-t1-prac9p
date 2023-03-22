var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}))

var port = process.env.port || 4000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
})