import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <nav class="navbar navbar-default">
                 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/form">Signup</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                  </div>
                </nav>
            </div>
               );
    }
}
export default Navbar;
