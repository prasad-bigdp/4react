import { Component } from "react";

class Cls extends Component
{
  name; age;
  constructor(props)
  { // used to initalise the values, it will run automatically first
    super(props);
    console.log("constructor called")
    this.name=props.n,
     this.age=props.a
    this.state = {
       name: this.props.n,
       age :this.props.a
    }
  }
  componentDidMount ()
  {
    console.log("componentDidMount called")
  }
  shouldComponentUpdate ()
  {
    console.log("shouldcomponentupdate called")
    return true;
  }
  componentDidUpdate ()
  {
    console.log("componentDidUpdate called")
  }




  render ()
  {
    console.log("render called")
    return (
			<>
        <h1>Hello world,{this.state.name}. your age is {this.state.age}</h1>
        <button onClick={() =>
        {
          console.log(this.state)
          this.setState({ ...this.state, age: this.age++ })
        }
        }>+</button>
			</>
		)
  }
}
export default Cls