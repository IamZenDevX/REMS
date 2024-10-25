const express = require("express");
const router = express.Router();

const {addowner, getowner} = require("../controller/ownerController");



router.post("/addowner",  addowner);

router.get("/getowner/id/:id",  getowner);

module.exports = router;