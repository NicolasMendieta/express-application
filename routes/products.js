'use strict'

const express = require('express')
const router = express.Router()

const products = [
  { name: 'tete', price: '80' },
  { name: 'toto', price: '90' }
]
router.get('/', function (req, res, next) {
  res.render('products', { products })
})

module.exports = router