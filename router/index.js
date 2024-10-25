const express = require("express");
const router = express.Router();

const customerRoute = require("./customerRoute");
const loanRoute = require("./loanRoute");
const ownerRoute = require("./ownerRoute");
const propertyRoute = require("./propertyRoute");
const registartionRoute = require("./registartionRoute");
const transactionRoute = require("./transactionRoute");

router.use("/customer", customerRoute);
router.use("/loan", loanRoute);
router.use("/owner", ownerRoute);
router.use("/property", propertyRoute);
router.use("/registartion", registartionRoute);
router.use("/transaction", transactionRoute);

module.exports = router;
