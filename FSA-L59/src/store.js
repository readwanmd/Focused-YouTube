import { action, createStore } from 'easy-peasy';

const counterModel = {
	value: 0,
	increment: action((state, payload) => {
		state.value += payload;
	}),

	decrement: action((state, payload) => {
		state.value -= payload;
	}),

	resetCount: action((state, payload) => {
		state.value = 0;
	}),
};

let id = 1;
function generateId() {
	return id++;
}

function getTime() {
	const t = new Date();
	return t.toLocaleTimeString();
}

const historyModel = {
	items: [],
	addHistory: action((state, payload) => {
		state.items.push({
			id: generateId(),
			action: payload.action,
			count: payload.count,
			time: getTime(),
		});
	}),
	clearHistory: action((state) => (state.items = [])),
};

const store = createStore({
	count: counterModel,
	history: historyModel,
});
export default store;
