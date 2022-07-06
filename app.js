const express = require('express');
const bodyParser = require('body-parser');
const ejs  = require('ejs');
const serverless = require('serverless-http');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req,res){
  res.render("home");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.listen(2000, function(){
  console.log("Server started at port 2000");
});
