import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import {
  NavContainer,
  H2Nav,
  ButtonContainer,
  NavButton
} from "../styledComponents/AppStyling";

const NavHeader = () => {
  const [toggle, setToggle] = useDarkMode(false);

  const darkToggle = e => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <NavContainer>
      <H2Nav>
        Women's World Cup <br></br>Search Data
      </H2Nav>
      <ButtonContainer>
        <NavButton data-testid="navbutton" onClick={darkToggle}>
          Change Color Mode
        </NavButton>
      </ButtonContainer>
    </NavContainer>
  );
};
export default NavHeader;
