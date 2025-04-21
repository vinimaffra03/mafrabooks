import styled from "styled-components";

export const TituloSecundario = styled.h2`
  color: ${(props) => props.cor || "#000000"};
  width: 100%;
  background-color: #ffffff;
  padding: 0.5em 0;
  align-items: ${(props) => props.alinhamento || "center"};
  text-align: center;
  font-size: ${(props) => props.fontSize || "36px"};
  margin-top: 0;
`;
