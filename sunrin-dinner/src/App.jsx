import React from 'react';
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main"
import Pick from "./pages/Pick"
import ServiceIntro from "./components/ServiceIntro";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/pick" exact>
            <Pick />
          </Route>
        </Router>
    </div>
  );
}

export default App;