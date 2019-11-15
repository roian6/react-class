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

  onClickDel = idx =>{
    const items = this.state.items;
    this.setState({
      items: [...items.slice(0, idx), ...items.slice(idx + 1)]
    })
  }

  change = (e, input) => {
    const items = this.state.items;
    items[e] = input;
    this.setState({
      items
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} name="" id="" />
        <button onClick={this.onClickAdd} className="button">추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem 
          onClickDel={() => {
            this.onClickDel(idx);
          }}
          onClickEdit={() => {
            this.onClickEdit(idx);
          }}
          change = {this.change}
          key={idx} value={value} className="box"/>
        ))}
      </div>
    );
  }
}

export default App;
