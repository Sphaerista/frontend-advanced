import { Country } from "entities/Country";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

describe("profileSlice.test", () => {
  const data = {
    firstname: "aa",
    lastname: "kk",
    age: 12,
    country: Country.Belarus,
  };

  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { firstname: "" } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateErrors: undefined, data, form: data });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstname: "" } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ firstname: "zzz" })
      )
    ).toEqual({ form: { firstname: "zzz" } });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
