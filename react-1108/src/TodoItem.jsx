import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }

  buttonChange = e => {
    this.setState({
      isEdit: true
    });
  };

  buttonOk = e => {
    this.setState({
      isEdit: false
    });
    console.log("buttonOk");
    this.props.change(this.refs.input.value, this.props.index)
  };

  render() {
    if (this.state.isEdit) {
      return (
        <div className="box">
          <div className="text">{this.props.value}</div>
          <input type="text" ref="input"/>
          <button className="button" onClick={this.buttonOk}>
            완료
          </button>
          <button className="button" onClick={this.props.onClickDel}>
            삭제
          </button>
        </div>
      );
    }
    return (
      <div className="box">
        <div className="text">{this.props.value}</div>
        <button className="button" onClick={this.buttonChange}>
          수정
        </button>
        <button className="button" onClick={this.props.onClickDel}>
          삭제
        </button>
      </div>
    );
  }
}
export default TodoItem;
