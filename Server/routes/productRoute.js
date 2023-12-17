const express = require("express");
const router = express.Router();
const Validator = require("../authenticator/index");
const Controller = require("../Controller/product.controller");
const authenticator = require("../authenticator/authenticator");
const jwtService = require("../services/jwt.service");


router.post("/create",jwtService.verify, Controller.createProduct);
router.get("/getAll", Controller.getAllProductS);
router.get("/get/:id", Controller.getProduct);
module.exports= router
