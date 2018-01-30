import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/counter';
const initialState = {
	count: 0,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};
		default:
			return state;
	}
}

const store = createStore(reducer);

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Counter />
			</Provider>
		</div>
	);
};

export default App;
