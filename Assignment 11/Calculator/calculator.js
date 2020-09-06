const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1); // String to number
  var num2 = +req.body.num2;        // String to number
  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});

app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (Math.pow(height, 2));
  res.send(`Your BMI is ${bmi}`)
});

app.listen(3000, () => console.log("Server started on port 3000."));
