import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.catList = [
      { id: 1, name: "Tim" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Jane" },
    ];
  }


  render() {
    return (
      <div className="App">
        <h1>Cattydex</h1>
        <input />
        <div>
          {this.catList.map((cat)=>{
            return (
              <h1>{cat.name}</h1>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
