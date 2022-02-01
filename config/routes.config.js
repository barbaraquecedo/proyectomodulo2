const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const auth = require("../controllers/auth.controller");
const plans = require("../controllers/plans.controller");
const users = require("../controllers/users.controller");
const secure = require("../middlewares/security.mid");

router.get("/", misc.home);

router.get("/admin", secure.isAdmin, users.admin)

router.get("/users/:id", secure.isAuthenticated, users.profile);

router.get("/register", auth.register);
router.post("/register", auth.doRegister);
router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/logout", auth.logout);
router.get("/users/:id/verify", auth.verify);

router.get("/plans/create",  secure.isAuthenticated, secure.isAdmin, plans.create);
router.post("/plans/create",  secure.isAuthenticated, secure.isAdmin, plans.doCreate);
router.get("/pay", plans.pay)
//router.post("/plans/pay", plans.doPay)
router.get("/plans/:id", plans.detail);
router.post("/plans/:id/delete", secure.isAuthenticated, secure.isAdmin, plans.delete)
router.post("/plans/:id/likes", secure.isAuthenticated, plans.doLike);
router.post("/plans/:id/pays", secure.isAuthenticated, plans.doPay);



module.exports = router;