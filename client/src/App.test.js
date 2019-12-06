import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavHeader from "./components/NavHeader";
import * as tester from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without failing - the NavHeader button", () => {
  const navRender = tester.render(<NavHeader />);
  console.log(navRender.debug());
});

// https://www.npmjs.com/package/react-async

// testing results
// Test Suites: 2 passed, 2 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        3.333s
// Ran all test suites.
