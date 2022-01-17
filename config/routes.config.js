const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller")
const auth = require("../controllers/auth.controller")
const plans = require("../controllers/plans.controller")

//router.get("/", misc.home);

router.get("/", plans.list);
router.get("/plans/:id", plans.detail);



router.get("/register", auth.register)
router.post("/register", auth.doRegister)
router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/logout", auth.logout)



module.exports = router;