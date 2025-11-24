import { render, screen } from "@testing-library/react";
import AppNavbarLocalhost from "../../../main/components/Nav/AppNavbarLocalhost";
import React from "react";


describe("AppNavbarLocalhost tests", () => {
  test("renders correctly", async () => {
    render(<AppNavbarLocalhost />);
    await screen.findByText(/Running on /);
  });
});
