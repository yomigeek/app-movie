import React from "react";
import {SubHeaderBox, SubHeaderTitle} from "./styles";

const SubHeader = ({text}) => {
  return (
    <>
      <SubHeaderBox>
        <SubHeaderTitle>{text}</SubHeaderTitle>
      </SubHeaderBox>
    </>
  );
};

export default SubHeader;
