import { BACKEND_URL } from "../config.ts";
import { define } from "../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const formData = await ctx.req.formData();
    const credentials = {
      "email": formData.get("email"),
      "username": formData.get("username"),
      "password": formData.get("password"),
    };

    const resp = await fetch(`${BACKEND_URL}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const headers = new Headers();

    if (resp.status != 201) {
      const info = await resp.text();
      return ctx.redirect(`/error?info=${encodeURIComponent(info)}`);
    }

    headers.append("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
});
