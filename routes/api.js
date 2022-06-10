const express = require('express');
const router = express.Router();

// user validation Middleware
const validUserRequestMiddleware = require("../app/middleware/validUserRequestMiddleware");

const user = require('../app/controllers/user');
const userAuth = require('../app/controllers/userAuth');
const article = require('../app/controllers/article');


router.get("/", (req, res) => {
    res.send("api")
});

router.post('/createEditor', user.createEditor) // create new account
router.post("/login", userAuth.login); // login validation

router.post("/removeEditor", user.removeEditor); // login validation

router.post("/createArticle", article.addNewArticle)

module.exports = router;