import { Component } from "react";

class List extends Component{

    render(){
        return (
          <div>
            {this.props.filteredList.map((cat) => {
              return (
                <div>
                  <h1 key={cat.id}>{cat.name}</h1>
                  <img src={`https://robohash.org/${cat.id}?set=set4`} />
                </div>
              );
            })}
          </div>
        );
    }
}

export default List;