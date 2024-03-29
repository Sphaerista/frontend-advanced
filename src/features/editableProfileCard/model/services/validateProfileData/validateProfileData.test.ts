import { ValidateProfileError } from "../../consts/consts";
import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";

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
