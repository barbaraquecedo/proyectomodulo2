const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller")

router.get("/", misc.home);

router.get("/register", auth.register)


module.exports = router;