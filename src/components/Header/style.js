import styled from "styled-components";

export const ContainerStyled = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 80px;
  background: rgba(43, 45, 51, 0.3);
  box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  padding: 0 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  z-index: 900;
`;

export const LogoStyled = styled.img`
  width: 68px;
`;

export const MenuStyled = styled.img`
  width: 40px;
  `;

export const ButtonMenuStyled = styled.button`
  background-color: red;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  left: 80%;
  
`;

export const DropMenuStyled = styled.ul`
  background-color: rgba(43, 45, 51);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: auto;

  

  
  /*   display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
 */
`;

export const DropMenuStyled__Iten = styled.li`
  display: inline-block;
  width: 100%;
  height: 80px;
  color: white;

  

  padding: 30px;

  text-align: center;
  vertical-align: middle;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.487);
  }
`;
