import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="root">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <header>
          <div>Gmail</div>
          <div>이미지</div>
        </header>
        <section>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" width="272" height="92"/>
          <div className="searchBox">
            <i class="material-icons">search</i>
            <input className="searchInput"/>
            <i class="material-icons">keyboard</i>
            <i class="material-icons">mic</i>
          </div>
          <div className="buttons">
            <button>Google 검색</button>
            <button>I'm Feeling Lucky</button>
          </div>
        </section>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
