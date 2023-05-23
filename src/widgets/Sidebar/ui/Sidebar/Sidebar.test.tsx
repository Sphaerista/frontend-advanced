// import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe("Sidebar", () => {
  test("with only one param", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle collapsed", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
