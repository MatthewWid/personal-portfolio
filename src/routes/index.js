const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("main", {
		title: "Home"
	});
});

module.exports = router;
