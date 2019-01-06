// $( document ).ready(function() {
//     console.log( "ready!" )

var express = require("express")
var app = express()
app.set("view engine", "html")

app.listen(3000)

app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
    res.render('/QuarksBar/views/about')
  })

  app.get('/', function(req, res) {
    res.render('home')
  })

  app.get('/menu', function(req, res) {
    res.render('menu.html')
  })







// })
