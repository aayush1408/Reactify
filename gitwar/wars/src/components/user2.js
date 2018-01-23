import React from 'react';
export default class User1 extends React.Component{
render(){
    console.log(this.props.details2.length);
    console.log(this.props.details2);
    if(this.props.details2.length  !== 0){
    return(
            <div>
                <h1> Name:{this.props.details2.name}</h1>
                <img src={this.props.details2.avatar_url} width="120" height="120" />
                <h3> Username:{this.props.details2.login} </h3>
                <h3> Repositry:{this.props.details2.public_repos} </h3>
                <h4> Followers: {this.props.details2.followers}</h4>
            </div>
           )
}
else{
    return null
}
}
}
