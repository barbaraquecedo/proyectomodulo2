const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller")
const auth = require("../controllers/auth.controller")

router.get("/", misc.home);

router.get("/register", auth.register)
router.post("/register", auth.doRegister)



module.exports = router;