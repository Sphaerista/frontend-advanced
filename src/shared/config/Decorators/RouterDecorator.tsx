import { Decorator } from "@storybook/react";
import { BrowserRouter, Router } from "react-router-dom";

const RouterDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
export default RouterDecorator;
