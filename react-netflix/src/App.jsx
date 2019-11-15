import React from "react";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
    src: local("Material Icons"), local("MaterialIcons-Regular"),
      url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
      url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
      url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
  }
*{
  padding: 0;
  margin: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
    </>
  );
}

export default App;
