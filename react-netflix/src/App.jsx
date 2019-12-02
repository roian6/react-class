import React from "react";
import Banner from "./components/Banner";
import Main from "./pages/Main";
import Tv from "./pages/Tv";
import New from "./pages/New";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
}
body{
  background-color: black;
}
`;

function App() {
  return (
    <>
      <header>
        <GlobalStyle />
        <Router>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/test" exact>
            <div style={{ color: "white" }}>test</div>
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/new">
            <Tv />
          </Route>
        </Router>
      </header>
    </>
  );
}

export default App;
