import styled from "styled-components";

const CardContainer = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 3em auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

const Botao = styled.a`
  background-color: #eb9b00;
  text-decoration: none;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  border-radius: 1em;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

function LivrosSugeridos({ titulo, subtitulo, descricao, img }) {
  return (
    <CardContainer>
      <div>
        <h3>{titulo}</h3>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt={titulo} />
        <Botao href="#">Saiba Mais</Botao>
      </div>
    </CardContainer>
  );
}

export default LivrosSugeridos;
