import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const nameState = React.useState("");
  return (
    <div className="aroot">
      <input type="text"
      placeholder={"이름을 입력하세요"}
      onChange={e => nameState[1](e.target.value)}/>
      <div>이름: {nameState[0]}</div>
    </div>
  );
}

export default App;

