const express = require('express')

const router = express.Router()

const { getAddProduct, postAddProduct, getProducts } = require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product', getAddProduct)

// /admin/products => GET
router.get('/products', getProducts)

// /admin/add-product => POST
router.post('/add-product', postAddProduct)

module.exports = router
