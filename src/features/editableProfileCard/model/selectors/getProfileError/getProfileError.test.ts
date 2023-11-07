import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "000",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("000");
  });
  test("should work eith empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
