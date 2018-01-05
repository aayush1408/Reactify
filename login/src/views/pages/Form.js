import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component{
  constructor(props){
    super();
    this.state = {
        firstname:'',
        lastname:'',
        password:'',
        email:'',
        username:''
    };
  }
    change = e => {
      this.setState({
        [e.target.name] : e.target.value
      });
    };
    onSubmit = e => {
      e.preventDefault();
      console.log(this.state);
    }
    render(){
        return(
               <div className="container form-body">
                  <div className="page-header">
                      <h1>Sign up</h1>
                  </div>
                  <div className="container-fluid">
                      <div className="row">
                        <div className="cols xm=12 md=6">
                          <form className="form-group">
                        
                              <label>Firstname</label>  
                              <input type="text" placeholder="Enter your firstname..." aria-describedby="sizing-addon2" value={this.state.firstname} name="firstname" onChange= { e => this.change(e) } className="form-control"/>
                              <br/>
                              <label>Lastname</label>  
                              <input type="text" placeholder="Enter your lastname..." aria-describedby="sizing-addon2" value={this.state.lastname} name="lastname" onChange= { e => this.change(e) } className="form-control"/>
                              <br/>
                               <label>Username</label>  
                              <input type="text" placeholder="Enter your username..."  aria-describedby="sizing-addon2"value={this.state.username} name="username" onChange= { e => this.change(e) } className="form-control"/>
                              <br/>
                              <label>Email</label>
                              <input type="email" placeholder="Enter the email.." size="15px" name="email" value={this.state.email} aria-describedby="sizing-addon2"  onChange= { e => this.change(e)} className="form-control"/>
                              <br/>
                              <label>Password</label>
                              <input type="text" placeholder="Enter your password..." aria-describedby="sizing-addon2" name="password" value={this.state.password}  onChange= { e => this.change(e)} className="form-control"/>
                              <br/>
                              <button onClick={ e => this.onSubmit(e) } className="btn btn-sm btn-info" >Submit</button>
                            </form>
                          </div>
                        </div>
                   </div>
               </div>
               );
    }
}
export default Form;
