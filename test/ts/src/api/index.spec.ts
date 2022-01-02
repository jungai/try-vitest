import supertest from "supertest";
import { app } from ".";
import { nanoid } from "nanoid";

vi.mock("nanoid");

// mock function instead of mock library
// cuz i already mock library in previous example
vi.mock("../get_users", () => ({
  getUsers: () => ({ name: "iu" }),
}));

test("basic with guard", async () => {
  vi.mocked(nanoid).mockReturnValue("iu");

  const response = await supertest(app).get("/").expect(200);

  expect(response.body.msg).toBe("hello world with id -> iu");
});
