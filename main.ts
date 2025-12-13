import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";
import { getCookies } from "@std/http/cookie";

export const app = new App<State>();

app.use(staticFiles());

app.use(async (ctx) => {
  // https://docs.deno.com/runtime/reference/std/http/#examples
  const cookies = getCookies(ctx.req.headers);
  ctx.state.logged = "access_token" in cookies;
  return await ctx.next();
});

const LoggerMiddleware = define.middleware((ctx) => {
  console.log(`${ctx.req.method} ${ctx.req.url} logged=${ctx.state.logged}`);
  return ctx.next();
});

app.use(LoggerMiddleware);
app.fsRoutes();
