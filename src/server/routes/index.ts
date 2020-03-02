import {DefaultState, Context} from "koa";
import Router from "@koa/router";

export const router = new Router<DefaultState, Context>();

// Pages
router.get("/", async (ctx, next) => {
	await ctx.render("index.pug");
});

// Shortlinks
router.get("/github", async (ctx) => {
	await ctx.redirect("https://github.com/MatthewWid");
});
router.get("/linkedin", async (ctx) => {
	await ctx.redirect("https://www.linkedin.com/in/matthew-widdicombe/");
});
router.get("/twitter", async (ctx) => {
	await ctx.redirect("https://twitter.com/MatthewWidd");
});
router.get("/codepen", async (ctx) => {
	await ctx.redirect("https://codepen.io/MatthewWid");
});
router.get(["/resume", "/cv"], async (ctx) => {
	await ctx.redirect(
		"https://drive.google.com/file/d/1gdcjk3jynA8Kt6ie7Kev1gBmLGcs8hQe/view"
	);
});
