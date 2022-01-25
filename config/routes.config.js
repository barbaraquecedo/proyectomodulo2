const express = require("express");
const router = express.Router();
const misc = require("../controllers/misc.controller");
const auth = require("../controllers/auth.controller");
const plans = require("../controllers/plans.controller");
const users = require("../controllers/users.controller");
const secure = require("../middlewares/security.mid");

router.get("/", misc.home);

router.get("/plans/:id", plans.detail);

router.get("/users/:id", users.profile);

// anadir middleware auth + admin, acciones controlador

router.get("/register", auth.register);
router.post("/register", auth.doRegister);
router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/logout", auth.logout)

router.post("/plans/:id/likes", secure.isAuthenticated, plans.doLike);



module.exports = router;