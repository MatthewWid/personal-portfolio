const path = require("path");
const fetch = require("node-fetch");

const dropboxFile = (filePath) => async (_, res) => {
	const response = await fetch(
		"https://content.dropboxapi.com/2/files/download",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
				"Dropbox-API-Arg": `{\"path\": \"${filePath}\"}`
			}
		}
	);

	if (response.ok) {
		const body = await response.text();
		res.type("text/plain").send(body);
	} else {
		res.status(404).send(`Failed to fetch ${path.basename(filePath)} from Dropbox.`);
		console.error(response);
	}
};

module.exports = dropboxFile;
