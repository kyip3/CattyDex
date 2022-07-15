# React Basic - Class component

This project is for practicing and revising what is class component.

Reading Reference: 

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Tools:

https://fonts.google.com/specimen/Bigelow+Rules

https://robohash.org/




## Class component example

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

## `component state`
```
this.setState({name:'Tim'},console.log("this.state"))
```

`this.state` is always a json object (key value pairs)

`this.setState()` will trigger update of render again.

setState is a asynchronus call. It will only execute it later.



``` js
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
If you want to get the updated value immediately, you can pass it as a function or a callback.

