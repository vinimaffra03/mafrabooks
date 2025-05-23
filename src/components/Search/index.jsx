import Input from "../Input/index.jsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "../Search/styles.css";
import { getLivros } from "../../services/livros.js";

// section
const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  margin-bottom: 4em;
`;

// titulo
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

// subtitulo
const Subtitulo = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultadoLivro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 1em 35%;
  border-radius: 1em;

  p {
    width: 200px;
  }

  img {
    width: 100px;
    padding: 0 0 0 0;
  }

  &:hover {
    border: 1px solid white;
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

function Search() {
  const [livroPesquisado, setLivroPesquisado] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  //console.log(livroPesquisado);

  return (
    // Container principal da seção de busca section
    <SearchContainer>
      {/* Titulo da seção */}
      {/* Usando o styled-components para estilizar o componente */}
      <Titulo>Já sabe por onde iniciar ?</Titulo>

      {/* Subtitulo da seção */}
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>

      {/* Input de busca */}
      <Input
        placeholder="Escreva sua próxima leitura"
        // Adicionando um evento onBlur para capturar o valor do input
        onBlur={(evento) => {
          // Capturando o valor do input quando o evento onBlur é acionado
          const textoDigitado = evento.target.value;

          // criando filter para filtar um livro e setar o com includes o valor do input
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );

          // setando livro pesquisado com resultado do filter de pesquisa com o texto digitado
          setLivroPesquisado(resultadoPesquisa);
        }}
      />

      {/* Mapeando os livros pesquisados e exibindo o nome e a imagem de cada livro */}

      <div style={{ maxHeight: "10em", overflowY: "scroll" }}>
        {livroPesquisado.map((livro) => (
          <ResultadoLivro key={livro.nome}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </ResultadoLivro>
        ))}
      </div>
    </SearchContainer>
  );
}

export default Search;
