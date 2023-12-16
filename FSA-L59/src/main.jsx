import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';

// Action Type
const INCTEMENT = 'incriment';
const DECREMENT = 'decrement';

// actions

// Action Creator
const incriment = (payload) => ({
	type: INCTEMENT,
	payload,
});

const decriment = (payload) => ({
	type: DECREMENT,
	payload,
});

const countReducer = (/* previous State */ state = 0, action) => {
	// processing area
	switch (action.type) {
		case INCTEMENT:
			return state + action.payload;
		case DECREMENT:
			return state - action.payload;

		default:
			return state;
	}
	// returned stste is next state
};

const ADD_TO_HISTORY = 'addToHistory';
const CLEAR_HISTORY = 'clearHistory';

let id = 1;
function generateId() {
	return id++;
}

const addHistory = (history) => ({
	type: ADD_TO_HISTORY,
	payload: {
		id: generateId(),
		action: history.action,
		count: history.count,
		time: new Date(),
	},
});

const clearHistory = () => ({
	type: CLEAR_HISTORY,
});

const historyReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_HISTORY:
			return [...state, action.payload];

		case CLEAR_HISTORY:
			return [];

		default:
			return state;
	}
};

const store = createStore(
	combineReducers({
		count: countReducer,
		history: historyReducer,
	})
);

console.log(store.getState());

store.dispatch(incriment(1));
store.dispatch(addHistory({ action: INCTEMENT, count: 1 }));
store.dispatch(incriment(1));
store.dispatch(addHistory({ action: INCTEMENT, count: 1 }));
store.dispatch(clearHistory());

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
