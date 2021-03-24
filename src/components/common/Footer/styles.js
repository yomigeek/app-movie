import styled from "styled-components";

export const FooterBox = styled.div`
  height: 100px;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  margin-top: 10%;
  color: #fff;
`;

export const FooterSocial = styled.div`
  display: flex;
  margin-left: 5%;
  .social-icons {
    display: flex;
    width: 50%;
  }
  .download-icons {
    display: flex;
    width: 50%;
  }
`;

export const HeaderTitle = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  width: 50%;
  margin-left: 5%;
`;

export const HeaderMenu = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  * {
    margin-right: 15px;
  }
`;
