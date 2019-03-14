
var express = require('express')
var ejs = require('ejs')
var nodemailer = require('nodemailer')
var bodyparser = require('body-parser')
var app = express()
var fs = require('fs')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tectonroot@gmail.com',
      pass: 'tectonisgood'
    }
  })
var mailOptions = {}
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))
app.get('/',function(req,res) {
    res.render('index')
})
app.post('/contact',function (req,res) {
    mailOptions = {
        from: 'no-reply@teamviewer.com',
        to: 'neel.redkar@outlook.com',
        subject: req.body.subject+"---from: "+req.body.email+" and "+req.body.name,
        text: req.body.text
    }
    console.log(mailOptions)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
      res.redirect('/')
})
app.listen(process.env.PORT || 3000,function() {
    console.log('Portfolio has started to listen on post 3000')
})