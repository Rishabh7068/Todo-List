
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const ejs = require("ejs");

let items = [];

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US",option);

  res.render("ind", {
    todayisday: day,
    newitem : items
  });
});


app.post("/",function(req,res){

  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");

})



app.listen(3000, function () {
  console.log("I am lIve at localPort 3000");
});
