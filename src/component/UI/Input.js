import { Component } from "react";

class Input extends Component{

    render(){
        return <input type="search" onChange={this.props.onChangeHandler} />;
    }
}

export default Input;