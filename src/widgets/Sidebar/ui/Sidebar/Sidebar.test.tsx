// import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender";

describe("Sidebar", () => {
  test("with only one param", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle collapsed", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
