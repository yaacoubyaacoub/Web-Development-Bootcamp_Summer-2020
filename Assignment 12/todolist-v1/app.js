const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("List", {listTitle: day, newListItem: items});

  // var day = ["Sunday", "monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // if(today.getDay() == 6 || today.getDay() == 0) {
  //   res.render("List", {kindOfDay: day[today.getDay()]});
  // } else {
  //   res.render("List", {kindOfDay: day[today.getDay()]});
  // }
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  console.log(req.body.list);
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
      items.push(item);
      res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("List", { listTitle: "Work List", newListItem: workItems })
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
