import React from 'react';
import SearchBar1 from './search_bar1.js';
import SearchBar2 from './search_bar2.js';
import User1 from './user1.js';
import User2 from './user2';
import Calculate from './calculate.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {details1 :[],details2:[] }; //details1 is the app component state
  }
  getDetails1(detail1){
    this.setState({ details1: detail1});
    console.log(this.state.details1);  
  }
  getDetails2(detail2){
    this.setState({ details2: detail2});
    console.log(this.state.details2);  
  }
  render() {
    return (
      <div className="App">
        <SearchBar1  getDetails1={this.getDetails1.bind(this)}/>
        <User1 details1={this.state.details1} />
        <SearchBar2 getDetails2={this.getDetails2.bind(this)} />
        <User2 details2={this.state.details2} style="float:right" />
        <Calculate details1={this.state.details1} details2={this.state.details2}  />
      </div>
    );
  }
}

export default App;
