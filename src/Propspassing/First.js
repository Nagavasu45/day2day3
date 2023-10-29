import { Component } from "react";
import Second from "./Second";

class First extends Component{
    constructor(){
        super()
        this.state={count:1}
    }
    
    render(){
        return(
            <>
            <Second data={this.state.count} />
            </>
        )
    }
}
export default First