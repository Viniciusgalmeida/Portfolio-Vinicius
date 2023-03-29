import styled from "styled-components";
import { blueColor, whiteColor } from "../../../GlobalStyle";

//Texts standards
const StyledText = styled.p`
  font-family: "Roboto";
  margin-top: 20px;
`;

export const HelloStyled = styled(StyledText)`
  color: ${blueColor};
  margin-top: 70px;

  font-weight: 400;
  font-size: 19px;
`;

export const MyNameStyled = styled(StyledText)`
  color: ${blueColor};
  font-weight: 700;
  font-size: 34px;
`;

export const ProfessionStyled = styled(StyledText)`
  color: ${whiteColor};
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
`;

export const HelloButtonStyled = styled.button`
  width: 144.42px;
  height: 41px;
  background-color: transparent;
  margin-top: 30px;
  color: ${blueColor};

  border: 1px solid ${blueColor};
  border-radius: 4px;

  font-size: 16px;
`;
