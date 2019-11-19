import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 68px;
  display: flex;
  padding: 16px 36px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 100%;
  margin-right: 30px;
`;

const NavText = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  flex: 1;
  align-items: center;
`;

const NavTextItem = styled.ul`
  color: #e5e5e5;
  margin-left: 16px;
  &:hover {
    color: #b3b3b3;
  }
  &:active{
    color: #000;
    font-weight: bold;
  }
`;

const NavIcon = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
`;

const NavIconItem = styled.ul`
    width: fit-content;
    margin-right: 16px;
    &>img{
        height: 80%;
    }
`;

const Banner = props => {
  return (
    <div>
      <Wrapper>
        <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" />
        <NavText>
          <NavTextItem>홈</NavTextItem>
          <NavTextItem>TV 프로그램</NavTextItem>
          <NavTextItem>영화</NavTextItem>
          <NavTextItem>최근 추가된 항목</NavTextItem>
          <NavTextItem>내 리스트</NavTextItem>
        </NavText>

        <NavIcon>
          <NavIconItem>
            <img src="/search.svg" alt=""/>
          </NavIconItem>

          <NavIconItem>
            <img src="/gift.svg" alt=""/>
          </NavIconItem>

          <NavIconItem>
            <img src="/bell.svg" alt=""/>
          </NavIconItem>
        </NavIcon>
      </Wrapper>
    </div>
  );
};

export default Banner;
