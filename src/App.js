import { Component } from "react";
import "./App.css";
import List from "./component/Listing/List";
import Input from "./component/UI/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      catList: [],
      filterText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ catList: result });
      });
  }

  onSearchChange = (event) => {
    const value = event.target.value;
    this.setState(() => {
      return { filterText: value };
    });
  };

  render() {
    //filter list based in input
    const filteredCatList = this.state.catList.filter((cat) => {
      return cat.name
        .toLocaleLowerCase()
        .includes(this.state.filterText.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <h1>Cattydex</h1>
        <Input onChangeHandler={this.onSearchChange} />
        <List filteredList={filteredCatList} />
      </div>
    );
  }
}

export default App;
