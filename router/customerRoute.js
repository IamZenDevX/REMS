const express = require("express");
const router = express.Router();

const {getcustomer, login, register} = require("../controller/customerController");



router.get("/getcustomer/id/:id",  getcustomer);

router.post("/login",  login);

router.post("/register",  register);

module.exports = router;