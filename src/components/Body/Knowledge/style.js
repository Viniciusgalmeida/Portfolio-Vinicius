import styled from "styled-components";
import {
  blueColor,
  darkColor,
  greyColor,
  whiteColor,
} from "../../../GlobalStyle";

export const ContainerKnowStyle = styled.div`
  width: 100% +40px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: -40px;

  padding: 20px;
`;

export const TitleKnowStyle = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 32px;

  color: ${blueColor};
`;

export const StacksKnowStyle = styled.div`
  width: 80%;
  height: auto;

  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
`;

export const ImageContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  text-align: center;
`;

export const ImageStyle = styled.img`
  width: auto;
  max-height: 70px;
  margin-bottom: 10px;
`;

export const TextKnowStyle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  color: ${whiteColor};
`;

export const ButtonStyle = styled.button`
  width: 105px;
  height: 31px;

  border: 2px solid ${blueColor};
  border-radius: 15px;
  background-color: transparent;

  color: ${blueColor};

  margin-top: 25px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
