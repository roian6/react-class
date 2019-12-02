import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  cursor: pointer;
  width: calc(20% - 16px);
  padding-bottom: 10%;
  height: 0;
  position: relative;
  margin-right: 10px;
  display:flex;

  & > img {
    width: 85%;
    height: 90%;
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    bottom: 0;
    background-color: #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Fooditem = props => {
  return (
    <Wrapper>
      <img src={props.image} alt="" />
      <div>{props.title}</div>
    </Wrapper>
  );
};

export default Fooditem;
