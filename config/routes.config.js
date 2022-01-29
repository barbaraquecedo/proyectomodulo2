const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const auth = require("../controllers/auth.controller");
const plans = require("../controllers/plans.controller");
const users = require("../controllers/users.controller");
const secure = require("../middlewares/security.mid");

router.get("/", misc.home);


router.get("/users/:id", secure.isAuthenticated, users.profile);

// anadir middleware auth + admin, acciones controlador

router.get("/register", auth.register);
router.post("/register", auth.doRegister);
router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/logout", auth.logout);

router.get("/plans/create", plans.create);
router.post('/plans/create', plans.doCreate);
router.get("/plans/pay", plans.pay)
router.post("/plans/pay", plans.doPay)
router.get("/plans/:id", plans.detail);
router.post("/plans/:id/likes", secure.isAuthenticated, plans.doLike);
router.post("/plans/:id/pays", secure.isAuthenticated, plans.doPay);


module.exports = router;