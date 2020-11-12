const path = require("path");
const fetch = require("node-fetch");

const dropboxFile = async (req, res) => {
	const rawPath = req.params[0];

	const safePath = path.join("/", rawPath);

	const fullPath = path.join(process.env.DROPBOX_BASE_PATH, safePath);

	const response = await fetch(
		"https://content.dropboxapi.com/2/files/download",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
				"Dropbox-API-Arg": `{\"path\": \"${fullPath}\"}`
			}
		}
	);

	if (response.ok) {
		const body = await response.text();
		res.type("text/plain").send(body);
		console.info("User downloaded file", fullPath);
	} else {
		res.status(404).send(`Failed to fetch "${path.basename(rawPath)}", it may be the wrong path or may not exist.`);
		console.error("User failed to download file", fullPath);
	}
};

module.exports = dropboxFile;
