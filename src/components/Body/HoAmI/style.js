import styled from "styled-components";
import { greyColor, darkBlueColor, whiteColor } from "../../../GlobalStyle";

import { MarginLeft } from "../style";

//Texts standards
const StyledText = styled.p`
  font-family: "Roboto";
  color: ${whiteColor};
`;

export const HexagonBackgStyled = styled.div`
  width: 100% +  ${MarginLeft}px;
  /* height: auto + ${MarginLeft}px; */
  margin-left: ${-MarginLeft}px;
  left: 0;
  margin-top: 30px;

  background-color: ${greyColor};
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 100px 0;
`;

export const FotoProf = styled.img`
  width: 240px;
  height: 240px;
  clip-path: circle(50%);
  /* object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.7);

  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.7)); */
`;

export const TextBoxStyle = styled.div`
  width: 70%;
  height: auto;
  margin-top: -20px;
  background-color: ${darkBlueColor};
  box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 52px 32px 62px 34px;
`;

export const TitleInBoxStyle = styled(StyledText)`
  font-weight: 400;
  font-size: 32px;
`;

export const TextInBoxStyle = styled(StyledText)`
  font-weight: 300;
  font-size: 19px;
  margin-top: 20px;
`;
