const express = require("express");
const router = express.Router();

const {addloan, getloan} = require("../controller/loanController");



router.post("/addloan",  addloan);

router.get("/getloan/id/:id",  getloan);

module.exports = router;