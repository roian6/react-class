import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;

  position: absolute;
  left:0;

  right:0;
  top:0;

  z-index:-1;

  & > img {
    width: 100%;
  }

  & > div {
    position: absolute;
    left: 100px;
    top: 200px;
  }
`;

const Button = styled.button`
  cursor:pointer;
  color: white;
  padding: 14px;
  margin: 4px;
  border: 0;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.4);
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    overflow-y: hidden;
`;

const Preview = props => {
  return (
    <Wrapper>
      <img src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105" />
      <div>
        <img src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABduWV1XI_V1CpMePQjJ8-_aIvKPmyAvR8CAXcOAAOByHH-uTuwXXxspW-VTWODhxZtUSBI1BPK3cvJE818mM1QQ_e73MVBZPxu6c.webp?r=9a5" />
        <div>
          <br/>
          격동의 구한말, 불꽃처럼 타오르는 여인이 있다. 조국을 위해 <br />
          가시밭길을 택한 명문가의 규수. 그녀가 한 사내를 만난다. <br />
          동지인지, 적인지, 그저 이방인인지 모를 사내를. <br />
        </div>
        <ButtonGroup>
          <Button>재생</Button>
          <Button>내가 찜한 콘텐츠</Button>
          <Button>상세 정보</Button>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
};

export default Preview;
