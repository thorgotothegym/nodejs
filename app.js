const express = require("express");

const app = express();

const dummy = {
  name: "panda",
  food: "Bamboo",
};

app.use((req, res, next) => {
  console.log("first middleware");
  next(); // i need to pass next() to go to next middleware
});

app.use((req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Welcome to Express</h1>");
  /* res.send(dummy);
  res.end(); */
});

app.listen(3000);
