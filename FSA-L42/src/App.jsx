import Fetch from './Components/Fetch';

const App = () => {
	// const { count, handleIncrement, handleDecrement } = useCounter({
	// 	start: 0,
	// 	max: 5,
	// 	step: 1,
	// });
	// const {
	// 	count: count1,
	// 	handleIncrement: handleIncrement1,
	// 	handleDecrement: handleDecrement1,
	// } = useCounter({ start: 0, max: 10, step: 2 });
	// const {
	// 	count: count2,
	// 	handleIncrement: handleIncrement2,
	// 	handleDecrement: handleDecrement2,
	// } = useCounter({});
	return (
		<div>
			<h1>Lecture 42 - React Custom Hooks</h1>

			{/* <Counter start={-2} />
			<Counter max={5} />
			<Counter start={0} max={10} step={2} /> */}
			<br />
			<br />
			<h2>Fetch Data</h2>
			<Fetch />
		</div>
	);
};
export default App;
