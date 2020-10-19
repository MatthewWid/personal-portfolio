const router = require("express").Router();
const dropboxFile = require("../middleware/dropboxFile");

// Pages
router.get("/", (_, res) => res.render("index"));

// Shortlinks
router.get("/github", (_, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (_, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (_, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (_, res) => res.redirect("https://codepen.io/MatthewWid"));
router.get(["/resume", "/cv"], (_, res) => res.redirect("https://drive.google.com/file/d/1gdcjk3jynA8Kt6ie7Kev1gBmLGcs8hQe/view"));

// Config Files
router.get("/.vimrc", dropboxFile(process.env.DROPBOX_VIMRC_PATH));
router.get("/.bash_aliases", dropboxFile(process.env.DROPBOX_BASH_ALIASES_PATH));
router.get("/.bashrc", dropboxFile(process.env.DROPBOX_BASHRC_PATH));
router.get("/.tmux.conf", dropboxFile(process.env.DROPBOX_TMUX_CONF_PATH));

module.exports = router;
