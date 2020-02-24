const path = require("path");
const dotenv = require("dotenv");
const server = require("./server");

// Environment Variables
dotenv.config({
	path: path.join(__dirname, "../variables.env"),
});

// Server
server.listen(server.get("port"), () => console.info(`Express server listening on PORT ${server.address().port}. (${server.address().address})`));
