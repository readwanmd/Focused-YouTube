import { combineReducers, createStore } from 'redux';

// Action Type
export const DECREMENT = 'decrement';
export const INCREMENT = 'incriment';
export const CLEAR_COUNT = 'clear-count';

// actions

// Action Creator
export const incriment = (payload) => ({
	type: INCREMENT,
	payload,
});

export const decriment = (payload) => ({
	type: DECREMENT,
	payload,
});

export const clearCount = () => ({
	type: CLEAR_COUNT,
});

const countReducer = (/* previous State */ state = 0, action) => {
	// processing area
	switch (action.type) {
		case INCREMENT:
			return state + action.payload;
		case DECREMENT:
			return state - action.payload;
		case CLEAR_COUNT:
			return 0;

		default:
			return state;
	}
	// returned stste is next state
};

// actions
const ADD_TO_HISTORY = 'addToHistory';
const CLEAR_HISTORY = 'clearHistory';

let id = 1;
function generateId() {
	return id++;
}

function getTime() {
	const t = new Date();
	return t.toLocaleTimeString();
}

// Action Creator
export const addHistory = (history) => ({
	type: ADD_TO_HISTORY,
	payload: {
		id: generateId(),
		action: history.action,
		count: history.count,
		time: getTime(),
	},
});

export const clearHistory = () => ({
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

export default store;
