import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: ' ' }
    }
    onInputChange(e) {
        this.setState({
            term: e.target.value
        })
    }
    onSubmitForm(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmitForm.bind(this)} >
                <input
                    placeholder="Enter your favourite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <button className="btn btn-sm btn-primary">Submit</button>
            </form>
        );
    };

}
function mapDispatchToprops(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToprops)(SearchBar);
