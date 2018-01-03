import React from 'react';

class Counter extends React.Component{
    constructor(){
        super(props);
        this.state = {val:0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState({val:this.state.val+1});
    }
    decrement(){
        this.setState({val:this.state.val-1});
    }
    render(){
        return(
               <div>
                   <h1>{this.state.val}</h1>
                   <button onClick={this.increment}>Increase</button>
                   <button onClick={this.decrement}>Decrease</button>
               </div>
               )
    }
}
exports default Counter;
