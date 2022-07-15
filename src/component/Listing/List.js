import { Component } from "react";
import classes from "./List.module.css";

class List extends Component{

    render(){
        return (
          <div className={classes.listing}>
            {this.props.filteredList.map((cat) => {
              return (
                <div className={classes.list}>
                  <h1 key={cat.id}>{cat.name}</h1>
                  <img alt={`cat-${cat.name}`} src={`https://robohash.org/${cat.id}?set=set4`} />
                </div>
              );
            })}
          </div>
        );
    }
}

export default List;