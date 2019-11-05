import React from "react";
import "./App.modules.scss";

function App() {
  return (
    <div>
      <div className="root">
        <header>head</header>
        <nav>nav</nav>
        <div className="article">
          <section>main</section>
          <aside>aside</aside>
        </div>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
