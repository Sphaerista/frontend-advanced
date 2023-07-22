import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "aa",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("aa");
  });
  test("should work eith empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
