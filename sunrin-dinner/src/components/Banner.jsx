import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #4fc3f7;
  width: 100%;
  height: 72px;
  display: flex;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9000;
  align-items: center;
`;

const Logo = styled(Link)`
  margin-left: 24px;
  color: white;
  font-size: 24px;
  align-items: center;
  text-decoration: none;
  font-family: RoundB;
`;

const NavText = styled.ul`
  margin-right: 28px;
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
`;

const NavTextItem = styled.li`
  cursor: pointer;
  color: #fff;
  margin-left: 16px;
  &.select {
    color: white;
    font-weight: bold;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const setFont = event => {
  let menu = document.getElementsByClassName("menu");
  for (let a = 0; a < menu.length; a++) {
    menu[a].style.fontWeight = "normal";
  }
  event.target.style.fontWeight = "bold";
};

const Banner = props => {
  return (
    <div>
      <Wrapper>
        <Logo to="/">선린디너</Logo>
        <NavText>
          <NavTextItem className="menu" onClick={setFont}>
            <Link to="/">홈</Link>
          </NavTextItem>
          <NavTextItem className="menu" onClick={setFont}>
            <Link to="/pick">메뉴 뽑기</Link>
          </NavTextItem>
        </NavText>
      </Wrapper>
    </div>
  );
};

export default Banner;
