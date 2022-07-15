import { Component } from "react";

class List extends Component{

    render(){
        return (
          <div>
            {this.props.filteredList.map((cat) => {
              return <h1 key={cat.id}>{cat.name}</h1>;
            })}
          </div>
        );
    }
}

export default List;