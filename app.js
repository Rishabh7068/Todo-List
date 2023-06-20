const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname+"/date.js");
console.log(date());

const app = express();
const ejs = require("ejs");

let items = [];
let worki = [];

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  
  let day = date();

  res.render("ind", {
    listtitle: "Food " + day,
    newitem: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  console.log(req.body.submit);
  if (req.body.submit === "work") {
    worki.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("ind", {
    listtitle: "work",
    newitem: worki,
  });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  worki.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about",{

  });
});

app.listen(3000, function () {
  console.log("I am lIve at localPort 3000");
});
