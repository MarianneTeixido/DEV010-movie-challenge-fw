import { render, screen } from "@testing-library/react";
import React from "react"; 
import App from "../App"; 

describe("App", () => {
    it("should work as expected", () => {
        render(<App />);
        screen.debug();
    });
});
