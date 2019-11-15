import React from "react"
import Banner from "../components/Banner"

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{backgroundColor: "black", height: "100vh"}}><Banner/></div>
    }
}
export default Main