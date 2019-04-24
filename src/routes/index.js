const router = require("express").Router();

// Main Page
router.get("/", (req, res) => res.render("main", {title: "Home"}));

// Shortlinks
router.get("/github", (req, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (req, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (req, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (req, res) => res.redirect("https://codepen.io/MatthewWid/"));

module.exports = router;
