const express = require('express');
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me.");
});

app.get("/about", function(req, res) {
  res.send("About me page.");
});

app.get("/hobbies", function(req, res) {
  res.send("My hobbies page.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
