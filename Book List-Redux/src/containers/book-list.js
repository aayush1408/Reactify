import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux'; 

 class BookList extends React.Component{
    renderList(){
        return this.props.books.map((book) =>{
            return (
                        <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item"> {book.title} </li>
                    );
        });
    }

    render(){
        return(
                <ul className = "list-group col-sm-4">
                    {this.renderList()}
                </ul>
               )
    }
}
function mapStatetoProps(state){
    return {
        books:state.books
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStatetoProps,mapDispatchToProps)(BookList);
