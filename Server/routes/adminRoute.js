const express = require("express");
const { scanLocalNetwork } =require( 'local-network-scan')
const router = express.Router();
const { networkInterfaces } = require('os');
const Validator = require("../authenticator/index");
const Controller = require("../Controller/admin.controller");
const authenticator = require("../authenticator/authenticator");
const jwtService = require("../services/jwt.service");
router.get("/getAuth", jwtService.verify, Controller.getAuth);
router.post(
  "/register",
  Validator.body(authenticator.register),
  Controller.register
);

router.post("/login", Validator.body(authenticator.login), Controller.login);

module.exports = router;
