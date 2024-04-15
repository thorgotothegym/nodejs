const path = require("path");

const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // render shop === shop.pug in view
  res.render("shop");
});

module.exports = router;
