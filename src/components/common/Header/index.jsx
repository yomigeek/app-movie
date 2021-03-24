import React from "react";
import {HeaderBox, HeaderTitle, HeaderMenu} from "./styles";
import {useHistory} from "react-router-dom";

const Header = ({title, children}) => {
  const history = useHistory();
  return (
    <>
      <HeaderBox>
        <HeaderTitle onClick={() => history.push("/")}>{title}</HeaderTitle>
        <HeaderMenu>{children}</HeaderMenu>
      </HeaderBox>
    </>
  );
};

export default Header;
