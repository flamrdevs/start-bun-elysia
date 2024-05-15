import { describe, expect, it } from "bun:test";

import { Elysia } from "elysia";

import z from "zod";

import app from "~/app.ts";

const request = async (app: Elysia, path: string) => {
  const res = await app.handle(new Request("http://localhost" + path));
  return {
    json: () => res.json(),
  };
};

describe("app", () => {
  it("/", async () => {
    const { json } = await request(app, "/");

    expect(z.object({ name: z.string() }).safeParse(await json()).success).toBeTruthy();
  });
});
