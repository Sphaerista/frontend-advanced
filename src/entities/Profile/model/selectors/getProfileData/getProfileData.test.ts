import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "entities/Country";

describe("getProfileData.test", () => {
  test("should return data", () => {
    const data = {
      firstname: "aa",
      lastname: "kk",
      age: 12,
      country: Country.Belarus,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work eith empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
