import React from "react";
import "./App.scss";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e =>{
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} name="" id="" />
        <button onClick={this.onClickAdd} className="button">추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} className="box"/>
        ))}
      </div>
    );
  }
}

export default App;
