import React from "react";
import styled from "styled-components";
import { throwStatement } from "@babel/types";

const Input = styled.input``;
class Student extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        items: []
    }
  }
  

  render() {
    return (
      <div>
        {/* <input type="text" name="" id="" />
        <button onClick={this.onClickAdd}>추가</button>
        {this.state.items.map(()=>(
            
        ))} */}
      </div>
    );
  }
}
export default Student;
