const path = require("path");
const dotenv = require("dotenv");
const server = require("./server.js");

// Environment Variables
dotenv.config({
	path: path.join(__dirname, "../../variables.env"),
});

// Port
server.set("port", process.env.PORT || 80);

// Server
const listener = server.listen(server.get("port"), () =>
	console.info(
		`Express server listening on PORT ${listener.address().port}. (${listener.address().address})`
	)
);
