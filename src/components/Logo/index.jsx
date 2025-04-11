import style from "../Logo/styles.css";
import logo from "../../imgs/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
      <p>
        <strong> Mafra</strong>books
      </p>
    </div>
  );
}

export default Logo;
