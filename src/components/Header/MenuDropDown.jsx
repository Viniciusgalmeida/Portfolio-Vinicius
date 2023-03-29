import React, { useState } from "react";
import { ButtonMenuStyled, DropMenuStyled, DropMenuStyled__Iten, MenuStyled } from "./style";
import menu_icon from "../../assets/menu_icon.svg";

function MenuDropDown() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <ButtonMenuStyled onClick={handleClick}>
        <MenuStyled src={menu_icon} alt="menu" />;
      </ButtonMenuStyled>
      {showMenu && (
        <div>
          <nav>
            <DropMenuStyled>
              <DropMenuStyled__Iten>
                Quem sou
              </DropMenuStyled__Iten>
              <DropMenuStyled__Iten>
                Conhecimentos
              </DropMenuStyled__Iten>
              <DropMenuStyled__Iten>
                Projetos
              </DropMenuStyled__Iten>
              <DropMenuStyled__Iten>
                Contatos
              </DropMenuStyled__Iten>
              
              
            </DropMenuStyled>
          </nav>
        </div>
      )}
    </>
  );
}

export default MenuDropDown;
