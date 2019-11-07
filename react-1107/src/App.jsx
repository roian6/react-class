import React from "react";
//import "./App.module.scss";
import styled, { keyframes } from "styled-components";

/*const Root = styled.div`
  border: 1px solid #ddd;
  color: ${props => props.color};
  ${props =>
    !props.show &&
    css`
      display: none;
    `}
`;*/

const move = keyframes`
0%{
  transfrom: translate(0%, 0%);
}
50%{
  transfrom: translate(100px, 300px)
}
100%{
  transfrom: translate(1000px, 0%)
}`;

const Img = styled.img`
  animation: ${move} 1s linear infinite;
`;

function App() {
  return (
    <>
      <Img src="google.png" alt=""></Img>
    </>
  );
}

export default App;
