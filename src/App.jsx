import React from "react";
import Logo from "./components/Logo/index.jsx";
import "./App.css";
import perfil from "./imgs/perfil.svg";
import sacola from "./imgs/sacola.svg";

const opcoes = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];
const icones = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*componente logo */}
        <Logo />

        {/* usando map para array opcoes , atribuindo cada item do array para o parametro
          , entao criando um item da lista para cada opcao inserindo o parametro passado pelo map */}
        <ul className="opcoes">
          {opcoes.map((opcao) => (
            <li className="opcao">{opcao}</li>
          ))}
        </ul>

        {/* usando map para array icones , atribuindo cada item do array para o parametro*/}
        <ul className="icones">
          {icones.map((icone) => (
            <img src={icone} alt="icone" />
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
