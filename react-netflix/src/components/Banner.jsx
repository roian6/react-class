import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  padding: 16px 36px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9000;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 100%;
  margin-right: 30px;
`;

const NavText = styled.ul`
  display: flex;
  list-style: none;
  flex: 1;
  align-items: center;
`;

const NavTextItem = styled.li`
  cursor: pointer;
  color: #e5e5e5;
  margin-left: 16px;
  &:hover {
    color: #b3b3b3;
  }
  &.select {
    color: white;
    font-weight: bold;
  }
  a {
    color: #e5e5e5;
    text-decoration: none;
  }
`;

const NavIcon = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
`;

const NavIconItem = styled.li`
  cursor: pointer;
  height: 100%;
  width: fit-content;
  margin-right: 16px;
  & > img {
    height: 80%;
  }
`;

const setFont = event => {
  let menu = document.getElementsByClassName("menu");
  for (let a = 0; a < menu.length; a++) {
    menu[a].style.fontWeight = "normal";
    menu[a].style.color = "#e5e5e5";
  }
  event.target.style.fontWeight = "bold";
  event.target.style.color = "#fff";
};

const Banner = props => {
  return (
    <div>
      <Wrapper>
        <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" />
        <NavText>
          <NavTextItem className="menu" onClick={setFont}>
            <Link to="/">홈</Link>
          </NavTextItem>
          <NavTextItem className="menu" onClick={setFont}>
            <Link to="/tv">TV 프로그램</Link>
          </NavTextItem>
          <NavTextItem className="menu" onClick={setFont}>
            영화
          </NavTextItem>
          <NavTextItem className="menu" onClick={setFont}>
            <Link to="/new">최신 등록 콘텐츠</Link>
          </NavTextItem>
          <NavTextItem className="menu" onClick={setFont}>
            내 리스트
          </NavTextItem>
        </NavText>

        <NavIcon>
          <NavIconItem>
            <img src="/search.svg" alt="" />
          </NavIconItem>

          <NavIconItem>
            <img src="/gift.svg" alt="" />
          </NavIconItem>

          <NavIconItem>
            <img src="/bell.svg" alt="" />
          </NavIconItem>
        </NavIcon>
      </Wrapper>
    </div>
  );
};

export default Banner;
