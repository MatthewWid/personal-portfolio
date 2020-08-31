const path = require("path");
const dotenv = require("dotenv");

// Environment Variables
dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

// Server
const server = require("./server");

// Port
server.set("port", process.env.PORT || 80);

// Start
const listener = server.listen(server.get("port"), () =>
	console.info(
		`Express server listening on PORT ${listener.address().port}. (${
			listener.address().address
		})`
	)
);
