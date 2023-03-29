import React from "react";
import {
  MyNameStyled,
  HelloStyled,
  ProfessionStyled,
  HelloButtonStyled,
} from "./style";

function Banner() {
  return (
    <div>
      <HelloStyled>Olá, eu sou</HelloStyled>
      <MyNameStyled>Vinícius Almeida.</MyNameStyled>
      <ProfessionStyled>Frontend dev</ProfessionStyled>
      <HelloButtonStyled>Mande um oi</HelloButtonStyled>
    </div>
  );
}

export default Banner;
