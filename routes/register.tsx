import { define } from "../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const formData = await ctx.req.formData();
    const credentials = {
      "email": formData.get("email"),
      "username": formData.get("username"),
      "password": formData.get("password"),
    };

    const resp = await fetch("http://127.0.0.1:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const headers = new Headers();

    if (resp.status != 201) {
      const details = await resp.text();
      const errorUrl = new URL("/error");

      console.log(details);

      errorUrl.searchParams.set("details", details);
      headers.append("location", errorUrl.toString());

      return new Response(null, {
        status: 409,
        headers,
      });
    }

    headers.append("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
});
