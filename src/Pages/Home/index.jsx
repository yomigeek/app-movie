import React from "react";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import SubHeader from "../../components/common/SubHeader"
import { NavText } from './styles';

const Home = () => {
  return (
    <>
      <Header title="Demo Streaming">
        <NavText>Log In</NavText>
        <Button text="Start your free trial" />
      </Header>
      <SubHeader text="Popular Title"/>
    </>
  );
};

export default Home;
