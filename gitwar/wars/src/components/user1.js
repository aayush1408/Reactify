import React from 'react';
export default class User1 extends React.Component{
render(){
  if(this.props.details1.length !== 0){
    return(
            <div>
                <h1> Name:{this.props.details1.name}</h1>
                <img src={this.props.details1.avatar_url} width="120" height="120"  />
                <h3> Username:{this.props.details1.login} </h3>
                <h3> Repositry:{this.props.details1.public_repos} </h3>
                <h4> Followers: {this.props.details1.followers}</h4>
            </div>
           )
  }
  else{
    return null
  }
}
}
