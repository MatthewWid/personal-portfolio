const router = require("express").Router();

// Main Page
router.get("/", (req, res) => res.render("main"));

// Shortlinks
router.get("/github", (req, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (req, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (req, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (req, res) => res.redirect("https://codepen.io/MatthewWid"));
router.get("/resume", (req, res) => res.redirect("https://drive.google.com/file/d/1gdcjk3jynA8Kt6ie7Kev1gBmLGcs8hQe/view"));
router.get("/cv", (req, res) => res.redirect("/resume"));

module.exports = router;
