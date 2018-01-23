import React from 'react';
import axios from 'axios';

export default class SearchBar2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {user2 : '',detailsFetched:[]}
    }
    getUser2(e){
        e.preventDefault();
          axios.get(`https://api.github.com/users/${this.state.user2}`)
            .then((res)=>{
                this.setState({detailsFetched:res.data});
                this.props.getDetails2(this.state.detailsFetched);   
                this.setState({user2:''});
        })
            .catch((err)=>{
                console.log(err.response);
        })
    }
    onInputChange(e){
        e.preventDefault();
        this.setState({ user2 : e.target.value });
            }
    render(){
        return(
               <div>
               <form onSubmit={this.getUser2.bind(this)}>
                <input 
                type="text" 
                value={this.state.user2}
                placeholder = "Enter the 2nd user"
                onChange = {this.onInputChange.bind(this)}
                 />
                <input type="submit" />
                </form>
                </div>
               )
    }
}
