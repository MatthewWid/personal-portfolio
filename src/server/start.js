const path = require("path");
const dotenv = require("dotenv");
const server = require("./server");

// Environment Variables
dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

// Port
server.set("port", process.env.PORT || 80);

// Server
const listener = server.listen(server.get("port"), () =>
	console.info(
		`Express server listening on PORT ${listener.address().port}. (${
			listener.address().address
		})`
	)
);
