import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only one param", () => {
    expect(classNames("smClass")).toBe("smClass");
  });
  test("with add class", () => {
    const expected = "smClass cls1 cls2";
    expect(classNames("smClass", {}, ["cls1", "cls2"])).toBe(expected);
  });
  test("with mods", () => {
    const expected = "smClass cls1 cls2 hovered";
    expect(
      classNames("smClass", { hovered: true, scrollable: false }, [
        "cls1",
        "cls2",
      ])
    ).toBe(expected);
  });
  test("with mods undefined", () => {
    const expected = "smClass cls1 cls2";
    expect(
      classNames("smClass", { hovered: undefined }, ["cls1", "cls2"])
    ).toBe(expected);
  });
});
