import React from "react";
import Banner from "./Banner/Banner";
import HoAmI from "./HoAmI/HoAmI";
import Projects from "./Projects/Projects";
import Knowledge from "./Knowledge/Knowledge";
import { BodyStyled } from "./style";
import SideMenu from "./SideMenu/SideMenu";

function Body() {
  return (
    <BodyStyled>
      <SideMenu />
      <Banner />
      <HoAmI />
      <Knowledge />
      <Projects />
    </BodyStyled>
  );
}

export default Body;
