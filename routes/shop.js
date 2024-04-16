const path = require('node:path')

const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const products = adminData.products
  console.log('products', products)
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
})

module.exports = router
