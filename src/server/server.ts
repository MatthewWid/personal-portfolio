import path from "path";
import Koa from "koa";
import views from "koa-views";
import compress from "koa-compress";
import serveStatic from "koa-static";

export const server = new Koa();

server.use(views(path.resolve(__dirname, "./views/")));

server.use(compress());

server.use(serveStatic(path.resolve(__dirname, "../../public/")));

server.use(async (ctx) => {
	await ctx.render("index.pug");
});
