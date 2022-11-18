const express = require('express')

const adminRoute= require('./adminRoute')
const productRoute = require('./productRoute')


const Route = express.Router()

Route.use('/auth', adminRoute);

Route.use('/product', productRoute)


// Route.use('/admin', adminRoute);

module.exports= Route;