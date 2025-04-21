import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import UltimosLancamentos from "./components/UltimosLancamentos";
import Rodape from "./components/Rodape/index";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <UltimosLancamentos />
      <Rodape
        autor="Vinicius Mafra"
        linkedin="https://www.linkedin.com/in/viniciusmaffra/"
      />
    </AppContainer>
  );
}

export default App;
