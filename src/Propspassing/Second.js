import { Component } from "react";

class Second extends Component{
    constructor(props)
    {
        super(props)
        this.state={counter:props.data}
        console.log(this.state.counter)
    }
    render(){
        return(
            <>
            {
                this.state.counter
            }
            <h1> child component</h1>
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>increament</button>
            </>
        )
    }
}
export default Second