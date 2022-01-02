import type { RequestHandler } from "express";
import express from "express";
import { nanoid } from "nanoid";
import { getUsers } from "../get_users";

const app = express();

// verify only iu will pass
app.use(async (_req, res, next) => {
  // with mock in spec.ts
  const data = await getUsers();

  if (data.name === "iu") {
    next();

    return;
  }

  res.status(400).json({ msg: "not iu kub" });
});

app.get("/", (_req, res) => {
  res.json({ msg: `hello world with id -> ${nanoid(2)}` });
});

export { app };
