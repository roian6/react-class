import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  cursor: pointer;
  width: calc(20% - 8px);
  padding-bottom: 10%;
  height: 0;
  position: relative;
  margin-right: 10px;

  & > img {
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Movieitem = props => {
  return (
    <Wrapper>
      <img src={`http://image.tmdb.org/t/p/w185${props.title}`} alt=""/>
    </Wrapper>
  );
};

export default Movieitem;
