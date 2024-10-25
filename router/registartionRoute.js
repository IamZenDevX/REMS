const express = require("express");
const router = express.Router();

const {addregi, getregi} = require("../controller/registartionController");



router.post("/addregi",  addregi);

router.get("/getregi",  getregi);

module.exports = router;