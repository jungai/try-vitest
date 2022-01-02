import { test, expect, vi, afterAll, afterEach, beforeAll } from "vitest";
import { getId } from ".";
import { nanoid } from "nanoid";

// manual mock with __mocks__
vi.mock("nanoid");

// with factory
// vi.mock("nanoid", () => ({
//   nanoid: vi.fn(() => '12345')
// }))

beforeAll(() => {
  vi.mocked(nanoid).mockReset();
});

// can be config in vite.config.ts
// afterEach(() => {
//   vi.mocked(nanoid).mockClear()
// })

afterAll(() => {
  vi.unmock("nanoid");
});

test("should get iu 12345", () => {
  vi.mocked(nanoid).mockReturnValue("12345");

  expect(getId()).toBe("iu12345");
});

test("should get iu1st and more", () => {
  vi.mocked(nanoid).mockReturnValueOnce("1st");
  vi.mocked(nanoid).mockReturnValueOnce("2nd");
  vi.mocked(nanoid).mockReturnValueOnce("3rd");

  expect(getId()).toBe("iu1st");
  expect(nanoid()).eq("2nd");
  expect(nanoid()).eq("3rd");
  expect(nanoid).toHaveBeenCalledTimes(3);
});
