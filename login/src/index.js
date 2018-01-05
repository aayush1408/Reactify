import React from 'react';
import ReactDOM from 'react-dom';
import Full from './Full.js';
class Main extends React.Component{
    render(){
        return(
               <div className="container"> 
                  <div className="page-header">
                      <h4>Homepage</h4>
                  </div>
               </div>
               
               );
          
    }
}
export default Main;
ReactDOM.render(<Full />, document.getElementById('root'));


