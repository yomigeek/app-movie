import React from "react";
import Header from "../Header";
import Button from "../Button";
import SubHeader from "../SubHeader";
import Footer from "../Footer";
import {NavText} from "./styles";

const Container = ({titleBarText, children}) => {
  return (
    <>
      <Header title="Demo Streaming">
        <NavText>Log In</NavText>
        <Button text="Start your free trial" />
      </Header>
      {titleBarText !== "none" ? (
        <SubHeader text={`Popular ${titleBarText}`} />
      ) : (
        ""
      )}
      {children}
      <Footer />
    </>
  );
};

export default Container;
