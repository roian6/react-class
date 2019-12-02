import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 64px;
  width: 30vw;
`;

const Title = styled.div`
  font-family: RoundB;
  font-size: 64px;
  margin-bottom: 24px;
`;

const Text = styled.div`
  margin-bottom: 36px;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: white;
  padding: 16px 48px 16px 48px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  background-color: #4fc3f7;
  font-size: 16px;
  font-weight: bold;
  transition: 0.2s;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }
`;

const ButtonGroup = styled.div`
  overflow-y: hidden;
`;

const ServiceIntro = props => {
  return (
    <Wrapper>
      <div>
        <Image src="bigdata.jpg"></Image>
        <Title>선린디너</Title>
        <Text>
          "선린디너"는 매일 저녁 메뉴로 결정장애를 앓는 선린인들을 위해,
          랜덤으로 숙대 맛집을 찾아주는 웹 서비스입니다.
        </Text>
        <ButtonGroup>
          <StyledLink to="/pick">시작하기</StyledLink>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
};

export default ServiceIntro;
