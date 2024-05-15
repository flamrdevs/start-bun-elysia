import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

import env from "~/env.ts";

const app = new Elysia();

app
  .error({
    Error,
  })
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") return (set.status = 404), { message: "Not found" };
    if (code === "Error") return (set.status = 500), { message: error.message };
    return (set.status = 500), { message: error.message };
  });

app.use(cors());

app.get("/", () => {
  return { name: "start-bun-elysia" };
});

app.get("/env", () => {
  return env;
});

app.get("/throw", () => {
  throw new Error("Oops!");
});

export default app;
