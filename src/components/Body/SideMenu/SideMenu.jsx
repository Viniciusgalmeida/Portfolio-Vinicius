import React from "react";
import { IconStyle, SideMenuContainerStyle } from "./style";
import linkedin from '../../../assets/side_menu-icons/linkedin.svg';
import git from '../../../assets/side_menu-icons/git.svg';
import codewars from '../../../assets/side_menu-icons/codewars.svg';
import youtube from '../../../assets/side_menu-icons/youtube.svg';

function SideMenu() {
  return <SideMenuContainerStyle>
    <IconStyle src={linkedin} />
    <IconStyle src={git} />
    <IconStyle src={codewars} />
    <IconStyle src={youtube} />

  </SideMenuContainerStyle>;
}

export default SideMenu;
