import React from "react";
import {HeaderBox, HeaderTitle, HeaderMenu} from "./styles";

const Header = ({title, buttonText, children}) => {
  return (
    <>
      <HeaderBox>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderMenu>
            {children}
        </HeaderMenu>
      </HeaderBox>
    </>
  );
};

export default Header;
