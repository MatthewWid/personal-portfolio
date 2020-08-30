const fetch = require("node-fetch");
const router = require("express").Router();

// Pages
router.get("/", (_, res) => res.render("index"));

// Shortlinks
router.get("/github", (_, res) => res.redirect("https://github.com/MatthewWid"));
router.get("/linkedin", (_, res) => res.redirect("https://www.linkedin.com/in/matthew-widdicombe/"));
router.get("/twitter", (_, res) => res.redirect("https://twitter.com/MatthewWidd"));
router.get("/codepen", (_, res) => res.redirect("https://codepen.io/MatthewWid"));
router.get(["/resume", "/cv"], (_, res) => res.redirect("https://drive.google.com/file/d/1gdcjk3jynA8Kt6ie7Kev1gBmLGcs8hQe/view"));

// Integrations
router.get("/.vimrc", async (_, res) => {
	const response = await fetch(
		"https://content.dropboxapi.com/2/files/download",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
				"Dropbox-API-Arg": `{\"path\": \"${process.env.DROPBOX_VIMRC_PATH}\"}`
			}
		}
	);

	if (response.ok) {
		const body = await response.text();
		res.send(body);
	} else {
		res.status(404).send("Failed to fetch .vimrc from Dropbox.");
	}
});

module.exports = router;
