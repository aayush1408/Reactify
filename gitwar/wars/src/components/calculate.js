import React from 'react';

export default class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state = {winner:'',}
    }
    findWinner(){
        let count1 = 0;
        let count2 = 0;
        if(this.props.details1.public_repos > this.props.details2.public_repos){
            count1 = count1+1;
            console.log(count1);
            console.log(count2);
        }
        else{
            count2 = count2 +1;
        }
         if(this.props.details1.followers > this.props.details2.followers){
            count1 = count1+1;
            console.log(count1);
            console.log(count2);
        }
        else{
            count2 = count2 +1;
        }
         if(count1 > count2){
            this.setState({winner:this.props.details1.name})            
        }
        else if(count1<count2){
            this.setState({winner:this.props.details2.name})            
        }
        else{
             this.setState({winner:"Nobody ,it's a draw" })
        }
    }
    render(){
        if(this.state.winner === ''){
             return(
               <div>
                <button onClick={this.findWinner.bind(this)}>Find the winner</button>
                </div>
                )     
        }
        else{
                    return (<h1>Winner is {this.state.winner}</h1>)
    }
}
}
