import React from "react";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <header>
      Header <HeaderButton buttonName="General" />{" "}
      <HeaderButton buttonName="Skills" />
    </header>
  );
}

export default Header;
