import { Component } from "react";
import classes from "./Input.module.css";

class Input extends Component{

    render(){
        return <input type="search" placeholder="search" onChange={this.props.onChangeHandler} />;
    }
}

export default Input;