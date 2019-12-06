import React from "react";
import NavHeader from "./NavHeader";
import * as tester from "@testing-library/react";

// Checking if Change Color Mode button is clickable...
it("Button toggles color mode without failing", () => {
  const { getByTestId } = tester.render(<NavHeader />);
  tester.fireEvent.click(getByTestId("navbutton"));
});
