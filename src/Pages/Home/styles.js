import styled from "styled-components";

export const TilesWrapper = styled.span`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 6%;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 20px;
    span {
        margin-top: 10px;
    }
    img {
        width: 100%;
        height: 250px;
    }
    cursor: pointer;
  }
`;
