import axios from "axios";
import { validateProfileData } from "./validateProfileData";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/profile";

const data = {
  firstname: "aa",
  lastname: "kk",
  age: 12,
  country: Country.Belarus,
};

describe("validateProfileData.test", () => {
  test("success", async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test("without first and last name", async () => {
    const result = validateProfileData({
      ...data,
      firstname: "",
      lastname: "",
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
