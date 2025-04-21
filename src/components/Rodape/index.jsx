import styled from "styled-components";
import { TextoAncora } from "./styles";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    background-color: rgb(230, 230, 230);
    border-radius: 1em;
    border: 2px solid #000000;
  }
`;

function Rodape({ autor, linkedin }) {
  return (
    <FooterContainer>
      <p>
        <TextoAncora
          href={linkedin}
          fonteTexto="18px"
          corTexto="#000000"
          fontWeight="700"
        >
          Desenvolvido por : {autor}
        </TextoAncora>
      </p>
    </FooterContainer>
  );
}

export default Rodape;
