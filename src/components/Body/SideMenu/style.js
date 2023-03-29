import styled from "styled-components";

export const SideMenuContainerStyle = styled.div`
  width: 30px;
  height: 180px;
  /* background-color: red; */

  position: fixed;

  left: 11px;
  bottom: 50px;

  z-index: 900;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconStyle = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;
