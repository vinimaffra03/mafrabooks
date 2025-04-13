import "../Header/styles.css";
import Logo from "../Logo/index.jsx";
import OpcoesHeader from "../OpcoesHeader/index.jsx";
import IconesHeader from "../IconesHeader/index.jsx";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
