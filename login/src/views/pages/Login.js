import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component{
    render(){
        return(
            <div className="container form-body">
                <div className="page-header">
                    <h2>Login</h2>
                </div>
                <form className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder = "Enter the Username.." /><br/>
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder ="Enter the password.."/><br/>
                    <button className="btn btn-sm btn-info">Login</button>
                </form>
            </div>
               );
    }
}
export default Login
