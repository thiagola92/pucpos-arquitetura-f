// We created two projects (frontend and backend) and they need to communicate with each other.
//
// This creates 2 situations:
//  1- When running normally in our machine, they can access each other freely through localhost.
//  2- When running through containers, they need each other container IP (or container name).
//
// Javascript sent to the client can't access container by name (but still containers are exposed to machine), so:
//  3- When running Javascript from client, use localhost.

const IS_CONTAINER = typeof Deno !== "undefined"
  ? Deno.env.has("DENO_DEPLOYMENT_ID")
  : false;

// Backend URL for the client to use.
export const C_BACKEND_URL = "http://localhost:8000";

// Backend URL for the server to use.
export const S_BACKEND_URL = IS_CONTAINER
  ? "http://pucpos-b:8000"
  : C_BACKEND_URL;
