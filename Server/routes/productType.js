const express = require("express");
const router = express.Router();
const Controller = require("../Controller/producttype.controller");
const jwtService = require("../services/jwt.service");


router.post("/create",jwtService.verify, Controller.createProduct);
router.get("/getAll", Controller.getAllProductType);
router.get("/:id", Controller.getProduct)



module.exports= router
