import React from 'react';
import './App.scss';

const App = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setColor(randColor())
  }, [name])

  const randColor = () =>{
    return [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)]
  }

  return (
    <div className="aroot">
      <input type="text" onChange={e=>setName(e.target.value)}/>
      <div style={{color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>{name}</div>
    </div>
  );
}

export default App;

