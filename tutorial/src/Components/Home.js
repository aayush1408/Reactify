import React, { Component } from 'react';


class Home extends Component {
    constructor(props){
        super();
        this.state = {age : props.age,link:'Changed'}
        this.increment = this.increment.bind(this); 
    }
    increment(){
        this.setState ({age:this.state.age+1 }); 
        console.log(this.state.age);
    }
    giveit(){
        this.props.change(this.state.link);
    }
  render() {
    return (
      <div>
        <p>{this.props.obj.name}</p>
        <p>{this.state.age}</p>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.props.greet}>Greet</button>
        <button onClick={this.giveit.bind(this)}>Change it</button>
        <ul>
            {this.props.obj.food.map((i,k)=>{
                
                return <li key={k}>{i}</li>    
            })
            }
        </ul>
      </div>
    );
  }
}

export default Home;

