// jshint esversion:6
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const ejs = require("ejs");

var items = [];

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();

  var option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US",option);

  res.render("ind", {
    todayisday: day,
    newitem : items
  });
});


app.post("/",function(req,res){

  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");

})



app.listen(3000, function () {
  console.log("I am lIve at localPort 3000");
});
