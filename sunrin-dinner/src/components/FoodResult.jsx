import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  cursor: pointer;
  padding-top: 36px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > img {
    width: 20%;
    height: 60%;
    margin: 0px auto;
  }

  &>div{
    margin-top: 24px;
    font-size: 28px;
    font-weight: bold;
  }
`;

const FoodResult = props => {
  return (
    <Wrapper>
      <img src={props.image[1]} alt="" />
      <div>{props.image[0]}</div>
    </Wrapper>
  );
};

export default FoodResult;
