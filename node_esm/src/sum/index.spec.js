import { expect, test } from "vitest";
import { sum } from ".";

test("sum of 2", () => {
  expect(sum(2, 2)).eq(4);
});
