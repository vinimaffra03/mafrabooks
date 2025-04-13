import logo from "../../imgs/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin: 0 0.4em 0 0.4em;
  padding: 0em;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" className="img-logo" />

      <p>
        <strong> Mafra</strong>books
      </p>
    </LogoContainer>
  );
}

export default Logo;
