import styled from "styled-components";
import { darkColor } from "../../GlobalStyle";

// The MarginLeft affects other components in the project like HoAmI
export const MarginLeft = 50;

//Components
export const BodyStyled = styled.div`
  width: 100%;
  height: auto;

  background-color: ${darkColor};

  padding: 80px 0 30px ${MarginLeft}px;
`;
