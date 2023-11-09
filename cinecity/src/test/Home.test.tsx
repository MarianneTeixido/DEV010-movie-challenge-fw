import { render, screen } from "@testing-library/react";

import  Home from "../components/Home/Home";

describe("Examples", () => {
  it("should be a teapot", () => {
    expect(1).toBe(1);
  });

  it("should render Home", () => {
    render(<Home />);
    screen.debug();
  });
});
