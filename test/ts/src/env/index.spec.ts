import { isSecretIsIu } from ".";

test("no1", () => {
  expect(isSecretIsIu()).toBeTruthy();
});
