import { describe, expect, it, vi } from "vitest";
import { getSecretIUId } from ".";
import { nanoid } from "nanoid";

vi.mock("nanoid");

describe("getSecretIUId", async () => {
  it("should return a iu id", async () => {
    expect(getSecretIUId()).eq("iu");
  });
});

describe.todo("getSecretAespaId", () => {});
