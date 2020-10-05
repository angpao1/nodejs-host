const express = require('express')

const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
    res.status(200).json("Hello")
})

module.exports = productRoutes