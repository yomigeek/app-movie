import React from "react";
import {FooterBox, FooterSocial} from "./styles";

const Footer = ({socialIcons, buttonText, children}) => {
  return (
    <>
      <FooterBox>
        m
        <FooterSocial>
          <div className="social-icons">a</div>
          <div className="download-icons">b</div>
        </FooterSocial>
      </FooterBox>
    </>
  );
};

export default Footer;
