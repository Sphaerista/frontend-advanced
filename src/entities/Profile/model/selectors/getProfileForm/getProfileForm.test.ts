import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";

describe("getProfileForm.test", () => {
  test("should return data", () => {
    const data = {
      firstname: "aa",
      lastname: "kk",
      age: 12,
      country: Country.Belarus,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test("should work eith empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
