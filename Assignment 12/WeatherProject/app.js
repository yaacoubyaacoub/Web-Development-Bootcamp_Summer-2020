const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=beirut&appid=74e14fe555352ff93fcc53d819f4b9f9&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      weatherData = JSON.parse(data);
      console.log(weatherData);

      const location = weatherData.name;
      console.log("Location: " + location);

      const temp = weatherData.main.temp;
      console.log("temperature: " + temp);

      const weatherDescription = weatherData.weather[0].description;
      console.log("Weather Description: " + weatherDescription);

      const object = {
        name: "Yaacoub",
        location: "Lebanon"
      }
      console.log(JSON.stringify(object));

      const icon = weatherData.weather[0].icon;
      console.log(icon);
      const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";

      res.write(`<h1>The temperature in ${location} is ${temp} degree Celcius.</h1>`);
      res.write(`<p>The weather is currenty ${weatherDescription}</p>`);
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });

});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
