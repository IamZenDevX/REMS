const express = require("express");
const router = express.Router();

const {addpropery, getpropery} = require("../controller/propertyController");



router.post("/addpropery",  addpropery);

router.get("/getpropery/id/:id",  getpropery);

module.exports = router;