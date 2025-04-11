import "./App.css";
import logo from "./imgs/logo.svg"; // main logo from  alura books

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>
            <strong> Mafra</strong>books
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
