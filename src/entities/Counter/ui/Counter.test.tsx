import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const value = screen.getByTestId("value-title");
    expect(value).toHaveTextContent("10");
  });
  test("increment", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incBtn = screen.getByTestId("increment-btn");
    const value = screen.getByTestId("value-title");
    userEvent.click(incBtn);
    expect(value).toHaveTextContent("10");
  });
  test("decrement", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const decBtn = screen.getByTestId("decrement-btn");
    const value = screen.getByTestId("value-title");
    userEvent.click(decBtn);
    expect(value).toHaveTextContent("10");
  });
});
