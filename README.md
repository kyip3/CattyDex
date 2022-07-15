# React Basic - Class component

This project is called Cattydex.

You can do a search to filter catty listing.

Is build using class component.


Reading Reference: 

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Tools:

https://fonts.google.com/specimen/Bigelow+Rules

https://robohash.org/123?set=set4

https://jsonplaceholder.typicode.com/users


---


## Class component examples

``` js
class Welcome extends React.Component {
  constructor() {
      super();
      this.state = {};
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## `constructor`

Constructor will run first when the component first initialize. 

Usually we store data into `this.state` 

Must call `super()` method.

## `render method`

React will call this method to render the UI on screen.

## `props`

In class, use `this.props` to access the props passed from the parent.

---
## `component state`
```
this.setState({name:'Tim'},console.log("this.state"))
```

`this.state` is always a json object (key value pairs)

`this.setState()` will trigger update of render again.

setState is a asynchronus call. It will only execute it later.


If you want to get the updated value immediately, you can pass it as a function or a callback.
``` js
//Secondary callback
//param state refer to the current state.
this.state((state,props)=>{
    return {
        name: 'Tim'
    }
},
()=>{
    //this function will run only when this state is updated.
    console.log(this.state);
})
```

``` js
//pass as a function to setState
// this.state = {
//   catList: [],
//   filterText: ""
// };
  onChangeHandler1 = (event) =>{
    const value = event.target.value;
    this.setState(()=>{
      return {filterText:value};
    });
  }

    onChangeHandler2 = (event) =>{
    const filterText = event.target.value;
    this.setState(()=>{
      return {filterText}; //this will find filterText object and replaced with filterText value
    });
  }

```
---
## Other examples

## `toLocaleLowerCase() and toLowerCase()`
Both work the same, except that toLocaleLowerCase will cater lower case for different languages. e.g turkish.

>The toLocaleLowerCase() method returns the value of the string converted to lower case according to any locale-specific case mappings. toLocaleLowerCase() does not affect the value of the string itself. In most cases, this will produce the same result as toLowerCase(), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.

## `map.filter()`
`map.filter()` will only accept boolean return. 

To filter based on condition return (true/false) 
``` js
const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
});
```
