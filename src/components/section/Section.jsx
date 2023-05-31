import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = (props) => {
  return (
    <Wrap bgimg={props.backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        {props.rightBtnText && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
};

// Wrap

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //  vertical
  align-items: center; // horizontal
`;

// ItemTest

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

//  ButtonGroup

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// LeftButton

const LeftButton = styled.div`
  background-color: var(--btn-color);
  height: 40px;
  padding: 10px 25px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

// LeftButton

const RightButton = styled(LeftButton)`
  background-color: var(--white-color);
  opacity: 0.65;
  color: var(--black-color);
`;

//  Downarrow
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

//  buttons

const Buttons = styled.div`
  margin-bottom: 15px;
  :nth-child(2) {
    display: flex;
    margin: 0 auto;
  }
`;

export default Section;
