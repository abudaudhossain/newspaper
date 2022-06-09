const express = require('express');
const accountAuth = require('../app/controllers/userAuth');
const services = require('../app/controllers/services');
const router = express.Router();

// user validation Middleware
const validUserRequestMiddleware = require("../app/middleware/validUserRequestMiddleware");
const user = require('../app/controllers/user');
const userAuth = require('../app/controllers/userAuth');


router.get("/", (req, res) => {
    res.send("api")
});

router.post('/createEditor', user.createEditor) // create new account
router.post("/login", userAuth.login); // login validation

// router.post("/service", validUserRequestMiddleware, services.transaction)

module.exports = router;