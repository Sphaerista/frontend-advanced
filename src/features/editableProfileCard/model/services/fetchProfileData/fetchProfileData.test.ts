import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk";
import { Country } from "entities/Country";
import { fetchProfileData } from "./fetchProfileData";

const data = {
  firstname: "aa",
  lastname: "kk",
  age: 12,
  country: Country.Belarus,
};

describe("fetchProfileData.test", () => {
  test("success fetch", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error fetch", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("1");
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
