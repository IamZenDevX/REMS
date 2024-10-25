const express = require("express");
const router = express.Router();

const {addtran, gettran} = require("../controller/transactionController");



router.post("/addtran",  addtran);

router.get("/gettran/id/:id",  gettran);

module.exports = router;