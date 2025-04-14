import Input from "../Input/index.jsx";
import styled from "styled-components";
import { useState } from "react";
import "../Search/styles.css";

// section
const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
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

function Search() {
  const [textoDigitado, setTextoDigitado] = useState("");

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
        onBlur={(evento) => setTextoDigitado(evento.target.value)} // Adicionando um evento onBlur para capturar o valor do input
      />

      {/* Exibindo o texto digitado no input */}
      <h2 className="teste">{textoDigitado}</h2>
    </SearchContainer>
  );
}

export default Search;
