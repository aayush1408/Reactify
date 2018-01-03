import React from 'react';
import ReactDom from 'react-dom';
import '../css/input.css';
import List from './list.js';


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={ arr:[] ,val:'' };
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    }
    delete(item){
        console.log(item);
        let newItem = this.state.arr.filter((i)=>{
            return i!=item;
        });
        console.log(newItem);
        this.setState({arr:newItem});
    }
    handleChange(e){
        this.setState({val:e.target.value});
    }
     add(e){
        this.setState({ arr:[...this.state.arr , this.state.val] , val:''});
        console.log(this.state.arr);
        e.preventDefault();
    }
    render(){
        return(
               <div>
                   <form>
                       <label>Task</label><br/><br/>
                       <input type="text" placeholder="Enter your task" value={this.state.val} onChange={this.handleChange} /><br/>
                       <button onClick={this.add}>Add</button>
                   </form>
                   <List tasks={this.state.arr} delete={this.delete} />
               </div>
               )
    }
}
export default Input;
