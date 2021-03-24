import React from "react";
import {HeaderBox, HeaderTitle, HeaderMenu} from "./styles";

const Header = ({title, children}) => {
  return (
    <>
      <HeaderBox>
        <HeaderTitle onClick={() => (window.location.href = "/")}>
          {title}
        </HeaderTitle>
        <HeaderMenu>{children}</HeaderMenu>
      </HeaderBox>
    </>
  );
};

export default Header;
