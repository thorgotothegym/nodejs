const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  res.send("<h1>Dummy Response</h1>");
});

app.use("/", (req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Welcome to Express</h1>");
});

app.listen(3000);
