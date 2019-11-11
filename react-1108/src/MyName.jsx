import React from "react"

class MyName extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                my name is <b>{this.props.name}</b>
            </div>
        )
    }
}

export default MyName;