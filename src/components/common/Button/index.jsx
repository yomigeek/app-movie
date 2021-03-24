import React from "react";
import {PrimaryButton} from "./styles";

const Button = ({text}) => {
  return (
    <>
      <PrimaryButton>{text}</PrimaryButton>
    </>
  );
};

export default Button;
