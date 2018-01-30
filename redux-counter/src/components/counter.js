import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
	}
	decrement() {
		this.props.dispatch({ type: 'DECREMENT' });
	}
	render() {
		return (
			<div>
				<button onClick={this.increment.bind(this)}>+</button>
				{this.props.count}
				<button onClick={this.decrement.bind(this)}>-</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		count: state.count,
	};
}

export default connect(mapStateToProps)(Counter);
