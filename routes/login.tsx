import { define } from "../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const formData = await ctx.req.formData();
    console.log(formData);

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie
    const headers = new Headers();
    headers.append("set-cookie", "token=xxxx");
    headers.append("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
});
