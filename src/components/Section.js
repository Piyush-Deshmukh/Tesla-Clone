import React from "react";
import styled from "styled-components";
import 'animate.css';

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
  showDownArrow
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">{title}</h1>
        <p className="animate__animated animate__fadeInUp animate__delay-2s animate__fast">{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton className="animate__animated animate__fadeInLeft animate__delay-2s">{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton className="animate__animated animate__fadeInRight animate__delay-2s">{rightBtnText}</RightButton>}
        </ButtonGroup>
        {showDownArrow && <DownArrow src="./images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
}

export default Section;


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("./images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  display: grid;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 256px;
  margin: 8px;
  background-color: rgba(23, 23, 32, 0.8);
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  opacity: 0.85;
  text-tranform: uppercase;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 35px;
  animation: bounce infinite 2s;
  animation-delay: 2.2s;
`;

const Buttons = styled.div``;
