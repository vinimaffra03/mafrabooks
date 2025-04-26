import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding-right: 1em;
  gap: 2em;
  cursor: pointer;
  min-width: 120px;
  padding-right: 10em;
`;

const Opcao = styled.li`
  font-size: 18px;
`;

const opcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function OpcoesHeader() {
  return (
    // usando map para array opcoes , atribuindo cada item do array para o parametro
    // , entao criando um item da lista para cada opcao inserindo o parametro passado pelo map
    <Opcoes>
      {opcoes.map((opcao) => (
        <Link to={`/${opcao}`.toLowerCase()}>
          <Opcao>{opcao}</Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
