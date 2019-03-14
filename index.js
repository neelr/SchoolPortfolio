
var express = require('express')
var ejs = require('ejs')
var bodyparse = require('body-parser')
var app = express()
var fs = require('fs')
app.set('view engine','ejs')
app.use(bodyparse.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))
app.get('/',function(req,res) {
    res.render('index')
})
app.listen(3000,function() {
    console.log('Portfolio has started to listen on post 3000')
})