import "./styles.css";
import perfil from "../../imgs/perfil.svg";
import sacola from "../../imgs/sacola.svg";

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    //usando map para array icones , atribuindo cada item do array para o parametro
    <ul className="icones">
      {icones.map((icone) => (
        <img src={icone} alt="icone" />
      ))}
    </ul>
  );
}

export default IconesHeader;
