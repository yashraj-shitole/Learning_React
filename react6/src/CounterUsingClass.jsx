import React, { Component } from 'react'

export default class CounterUsingClass extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }


    increment(){
        this.state({count: this.state.count + 1})
    }
    decrease(){
        this.state({count:this.state.count - 1})
    }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>increment</button>
        <br />
        <button onClick={()=>this.decrease()}>Decrease</button>
        

        
      </div>
    )
  }
}


// state is builtin react object that is used to contain data or information about the component
// a component state can change over time whenever it changes the component rerenders
//Props are type of object where the value of attribute of tag is stored
//word props implies properties