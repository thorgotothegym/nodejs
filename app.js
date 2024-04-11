const express = require("express");
const bodyParse = require("body-parser");

const routesAdmin = require("./routes/admin");
const routesShop = require("./routes/shop");

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use("/admin", routesAdmin);
app.use(routesShop);

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.listen(3000);
