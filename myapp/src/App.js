import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 28, belt: "black", id: 1},
      { name: "Yoshi", age: 30, belt: "green", id: 2},
      { name: "Crystal", age: 25, belt: "pink", id: 3},
      { name: "Limpopolos", age: 20, belt: "yellow", id: 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }

}

export default App;
