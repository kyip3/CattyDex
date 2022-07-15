import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      catList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ catList: result });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Cattydex</h1>
        <input type="search" />
        <div>
          {this.state.catList.map((cat) => {
            return <h1 key={cat.id}>{cat.name}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
