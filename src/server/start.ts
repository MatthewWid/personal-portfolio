import path from "path";
import {AddressInfo} from "net";
import dotenv from "dotenv";
import {server} from "./server";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

const listener = server.listen(process.env.PORT ?? 80, () => {
	console.log(
		`Koa server listening on port ${(listener.address() as AddressInfo).port}`
	);
});
