import styled from "styled-components";

export const FooterBox = styled.div`
  height: fit-content;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 20px 45px;
  margin-top: 10%;
  color: #fff;
`;

export const FooterLinkText = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #A8ACAC;
  font-size: 15px;
  margin: 5px 2% 30px;
  a {
    text-decoration: none;
    color: #A8ACAC;
    margin: 10px 15px;
  }
  span {
    margin: 10px 0px;
  }
`;

export const CopyrightText = styled.div`
  color: #A2A39E;
  font-size: 15px;
  margin: 1px 3% 70px;
`;

export const FooterSocial = styled.div`
  display: flex;
  margin-left: 2%;
  .social-icons {
    display: flex;
    width: 50%;
    img {
      width: 25px;
      height: 30px;
      margin: 0px 15px;
    }
  }
  .download-icons {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: flex-end;
    img {
      width: 120px;
      margin: 5px 15px;
    }
  }
`;
