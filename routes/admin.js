const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" /> <button type="submit">send<button/></form>'
  );
});

routes.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = routes;
