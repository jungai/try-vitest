import { getUsers } from ".";
import axios from "axios";

vi.mock("axios");

test("mock get users", async () => {
  const mockAxios = vi.mocked(axios);
  mockAxios.get = vi.fn().mockResolvedValue({ data: [{ name: "iu", no: 1 }] });

  expect(await getUsers()).toEqual([{ name: "iu", no: 1 }]);
});
