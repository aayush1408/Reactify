import React, { Component } from 'react';
import Home from './Components/Home.js';
import Header from './Components/Header.js';


class App extends Component {
  constructor(){
    super();
    this.state = {title:'Tutorial'}
  }
   onGreet(){
      alert('Hello');
    }
    changeHeading(newName){
      this.setState({title:newName});
    }
  render() {
    let obj = {
      name:'Maya',
      food:['apple','banana']
    }
   
    return(
           <div>
            <Header heading={this.state.title} />
            <Home obj={obj} age={31} greet={this.onGreet} change={this.changeHeading.bind(this)} />
          </div>
    );
  }
}

export default App;



