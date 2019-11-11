import React from "react";

class TodoItem extends React.Component{
    render(){
        return(
            <div className="box">
                <div className="text">{this.props.value}</div>
                <button className="button">수정</button>
                <button className="button">삭제</button>
            </div>
        )
    }
}
export default TodoItem;