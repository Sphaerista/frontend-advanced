import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toBe("?test=value");
  });
  test("test with multiple params", () => {
    const params = getQueryParams({
      test: "value",
      testy: "valuez",
    });
    expect(params).toBe("?test=value&testy=valuez");
  });
  test("test with undefined", () => {
    const params = getQueryParams({
      test: "value",
      testy: undefined,
    });
    expect(params).toBe("?test=value");
  });
});
