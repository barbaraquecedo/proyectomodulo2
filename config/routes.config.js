const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller")
const auth = require("../controllers/auth.controller")

router.get("/", misc.home);

router.get("/register", auth.register)
router.post("/register", auth.doRegister)

router.get("/login", auth.login);
router.post("/login", auth.doLogin);



module.exports = router;