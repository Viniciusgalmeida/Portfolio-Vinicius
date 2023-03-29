import React from "react";
import {
  FotoProf,
  HexagonBackgStyled,
  TextBoxStyle,
  TextInBoxStyle,
  TitleInBoxStyle,
} from "./style";
import foto_prof from "../../../assets/foto_prof.png";

function HoAmI() {
  return (
    <HexagonBackgStyled>
      <FotoProf src={foto_prof} />
      <TextBoxStyle>
        <TitleInBoxStyle>Quem sou</TitleInBoxStyle>
        <TextInBoxStyle>
          Sou um entusiasta da tecnologia e tenho focado meus esforços no
          desenvolvimento de aplicações ReactJS. 
          <br/><br/>
          Meu objetivo é criar
          experiências de usuário intuitivas e visualmente atraentes, com
          atenção especial para a performance e acessibilidade.
          <br/><br/>
          Sempre busco
          aplicar boas práticas de codificação, otimização para SEO e outros
          requisitos de desempenho, garantindo assim a qualidade e eficiência
          das minhas aplicações.
        </TextInBoxStyle>
      </TextBoxStyle>
    </HexagonBackgStyled>
  );
}

export default HoAmI;
