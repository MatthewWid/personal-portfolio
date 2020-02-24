const router = require("express").Router();

// Main Page
router.get("/", (_, res) => res.render("main"));

// Shortlinks
router.get("/github", (_, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (_, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (_, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (_, res) => res.redirect("https://codepen.io/MatthewWid"));
router.get(["/resume", "/cv"], (_, res) => res.redirect("https://drive.google.com/file/d/1gdcjk3jynA8Kt6ie7Kev1gBmLGcs8hQe/view"));

module.exports = router;
