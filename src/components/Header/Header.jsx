import React from "react";
import { ContainerStyled, LogoStyled, MenuStyled } from "./style";
import logo_vinicius from "../../assets/logo_vinicius.svg";
import MenuDropDown from "./MenuDropDown";

function Header() {
  return (
    <ContainerStyled>
      <LogoStyled src={logo_vinicius} alt="Logo" />
      <MenuDropDown />
    </ContainerStyled>
  );
}

export default Header;
