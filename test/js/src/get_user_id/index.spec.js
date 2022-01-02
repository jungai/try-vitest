import { nanoid } from "nanoid";
import { test, vi, expect } from "vitest";

vi.mock("nanoid");

test("should return a iu ida", async () => {
  expect(nanoid()).toBe(1);
});
