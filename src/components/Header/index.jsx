import Logo from "../Logo/index.jsx";
import OpcoesHeader from "../OpcoesHeader/index.jsx";
import IconesHeader from "../IconesHeader/index.jsx";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 4.3em;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-right: 1em;
`;

function Header() {
  return (
    <HeaderContainer>
      {/* Logo do site */}
      <Logo />

      {/* Opcoes do header */}
      <OpcoesHeader />

      {/* Ícones do header */}
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
