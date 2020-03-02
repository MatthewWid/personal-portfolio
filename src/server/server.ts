import path from "path";
import Koa from "koa";
import views from "koa-views";
import compress from "koa-compress";
import serveStatic from "koa-static";
import router from "./routes";

export const server = new Koa();

server.use(views(path.resolve(__dirname, "./views/")));

server.use(compress());

server.use(serveStatic(path.resolve(__dirname, "../../public/")));

server.use(router.routes()).use(router.allowedMethods());
