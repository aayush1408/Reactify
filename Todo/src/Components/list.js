import React from 'react';
 
class List extends React.Component{
    render(){
        return(
               <ul>
               {this.props.tasks.map((task,key) => <li key={key}> {task} <button onClick={this.props.delete.bind(null,task)}>X</button></li> )}
                </ul>
               )
    }
} 
export default List;
