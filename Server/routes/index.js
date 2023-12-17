const express = require('express')

const adminRoute= require('./adminRoute')
const productRoute = require('./productRoute')

const producttypeRoute = require('./productType')
const Route = express.Router()

Route.use('/auth', adminRoute);
Route.use('/producttype', producttypeRoute)
Route.use('/product', productRoute)

// Route.use('/admin', adminRoute);

module.exports= Route;