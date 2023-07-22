import { DeepPartial } from "@reduxjs/toolkit";
import { loginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<loginSchema> = { username: "aaaa" };
    expect(
      loginReducer(state as loginSchema, loginActions.setUsername("aa"))
    ).toEqual({ username: "aa" });
  });
  test("test set password", () => {
    const state: DeepPartial<loginSchema> = { password: "00" };
    expect(
      loginReducer(state as loginSchema, loginActions.setPassword("0000"))
    ).toEqual({ password: "0000" });
  });
});
