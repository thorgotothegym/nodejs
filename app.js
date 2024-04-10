const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /> <button type="submit">send<button/></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.listen(3000);
