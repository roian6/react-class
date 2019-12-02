import React from "react";
import styled from "styled-components";
import FoodItem from "../components/FoodItem";

const BtnSize = "45px";

const Wrapper = styled.div`
  color: black;
  margin: 0 auto;
  width: calc(100% - (${BtnSize} + ${BtnSize}));
  overflow: visible;
  padding-bottom: 1%;
  .title {
    margin: 36px;
    font-weight: bold;
    font-size: 24px;
  }

  .container {
    position: relative;
  }

  .slider {
    transform: ${props => `translateX(-${props.translate}px)`};
    transition: 0.5s;
    display: -webkit-box;
  }
`;

const BtnLeft = styled.button`
  width: ${BtnSize};
  margin-top: 24px;
  height: 90%;
  position: absolute;
  right: 100%;
  z-index: 5;
  opacity: 0;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.3s;
    background-color: rgba(79, 195, 247, 1);
  }
`;

const BtnRight = styled(BtnLeft)`
  left: 100%;
  right: none;
`;

const FoodContainer = props => {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);

  const slider = React.useRef(undefined);

  React.useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, []);

  const onClickLeft = () => {
    setPage(page - 1);
  };

  const onClickRight = () => {
    setPage(page + 1);
  };

  return (
    <Wrapper translate={(page - 1) * (sliderWidth + 10)}>
      <div className="title">{props.title}</div>
      <div className="container">
        <BtnLeft onClick={onClickLeft}>{"<"}</BtnLeft>
        <BtnRight onClick={onClickRight}>></BtnRight>
        <div className="slider" ref={slider}>
          {props.images.map((value, idx) => (
            <FoodItem title={props.images[idx][0]} image={props.images[idx][1]}/>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FoodContainer;
