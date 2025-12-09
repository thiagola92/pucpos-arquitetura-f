import { define } from "../utils.ts";
import { deleteCookie } from "@std/http/cookie";

export const handler = define.handlers({
  GET(ctx) {
    // https://docs.deno.com/runtime/reference/std/http/#examples
    const headers = new Headers();

    deleteCookie(headers, "access_token");
    headers.append("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
});
