import React, { Component } from 'react'

export default class StateWithClass extends Component {

    constructor(){
        super();
        this.state={
            data:"Yashraj"
        }
    }


    showData() {

        this.setState({data:"Shitole"});
    
    }

  render() {
    return (
      <div>
        
        <h1>My Name is {this.state.data}</h1>
        <button  onClick={()=>this.showData()}>Update</button>

      </div>
    )
  }
}
