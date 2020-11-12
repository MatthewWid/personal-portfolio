const router = require("express").Router();
const download = require("../middleware/download");

// Pages
router.get("/", (_, res) => res.render("index"));

// Shortlinks
router.get("/github", (_, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (_, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (_, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (_, res) => res.redirect("https://codepen.io/MatthewWid"));
router.get(["/resume", "/cv"], (_, res) => res.redirect(process.env.RESUME_URL));

// Dotfiles
router.get("/dl/*", download);

module.exports = router;
