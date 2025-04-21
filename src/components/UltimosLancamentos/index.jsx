import { livros } from "../UltimosLancamentos/dadosUltimosLancamentos";
import styled from "styled-components";
import { TituloSecundario } from "../Titulo";

const UltimosLancamentosContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(223, 223, 223);
  height: 100%;
  align-items: center;
`;

const ImagemContainer = styled.div`
  display: flex;
  gap: 2.5em;
`;

const ImagemLivros = styled.img`
  width: 18em;
  height: 25em;
  cursor: pointer;

  border-radius: 3em;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <TituloSecundario cor="#ffc800" fontSize="36px" alinahmento="center">
        Últimos lançamentos
      </TituloSecundario>
      <ImagemContainer>
        {livros.map((livro) => (
          <ImagemLivros src={livro.src} alt={livro.nome} />
        ))}
      </ImagemContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
