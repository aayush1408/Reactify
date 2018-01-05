import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Login from './views/pages/Login.js';
import Form from './views/pages/Form.js';
import Header from './Components/header.js';
import Main from './index.js';
class Full extends React.Component{
    render(){
        return(
               <div>
                    <Header />
                    <Navbar />
                    <BrowserRouter>  
                        <Switch>
                            <Route exact path='/login' component={Login} ></Route>
                            <Route exact path='/form' component={Form} ></Route>
                            <Route exact path='/' component={Main} ></Route>
                        </Switch>
                    </BrowserRouter>
              </div>
    );
}}
export default Full;
