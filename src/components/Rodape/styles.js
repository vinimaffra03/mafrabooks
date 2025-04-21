import styled from "styled-components";

export const TextoAncora = styled.a`
  font-size: ${(props) => props.fonteTexto || "16px"};
  color: ${(props) => props.corTexto || "#000000"};
  font-weight: ${(props) => props.fontePeso || "400"};
`;
