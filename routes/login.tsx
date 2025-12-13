import { define } from "../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const formData = await ctx.req.formData();

    const resp = await fetch("http://127.0.0.1:8000/token", {
      method: "POST",
      body: formData,
    });

    if (resp.status != 200) {
      const info = await resp.text();
      return ctx.redirect(`/error?info=${encodeURIComponent(info)}`);
    }

    const headers = new Headers();
    const body = await resp.json();

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie
    headers.append("set-cookie", `access_token=${body.access_token}`);
    headers.append("set-cookie", `token_type=${body.token_type}`);

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization
    // headers.append(
    //   "authorization",
    //   `${body.token_type} ${body.access_token}`,
    // );

    headers.append("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
});
