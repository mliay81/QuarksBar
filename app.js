// $( document ).ready(function() {
//     console.log( "ready!" )

var express = require("express")
var app = express()
app.set("view engine", "html")

app.listen(3000)

app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
    res.render('/QuarksBar/about')
  })

  app.get('/QuarksBar', function(req, res) {
    res.render('index')
  })

  app.get('/QuarksBar/menu', function(req, res) {
    res.render('/QuarksBar/menu')
  })







// })
