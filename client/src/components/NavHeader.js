import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavHeader = () => {
  const [toggle, setToggle] = useDarkMode(false);

  const darkToggle = e => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div>
      <h2>
        Women's World Cup <br></br>Search Data
      </h2>
      <div>
        <button data-testid="navbutton" onClick={darkToggle}>
          Change Color Mode
        </button>
      </div>
    </div>
  );
};
export default NavHeader;
