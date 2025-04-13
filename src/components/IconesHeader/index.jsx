import perfil from "../../imgs/perfil.svg";
import sacola from "../../imgs/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1em;
`;

const Icone = styled.img`
  width: 30px;
  height: 30px;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    //usando map para array icones , atribuindo cada item do array para o parametro
    <Icones>
      {icones.map((icone) => (
        <Icone src={icone} alt="icone" />
      ))}
    </Icones>
  );
}

export default IconesHeader;
