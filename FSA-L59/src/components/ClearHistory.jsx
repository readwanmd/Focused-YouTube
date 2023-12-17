import { useStoreActions } from 'easy-peasy';

const ClearHistory = () => {
	const { count, history } = useStoreActions((actions) => actions);

	const handleClearHistory = () => {
		history.clearHistory();
	};

	const handleClearCount = () => {
		count.resetCount();
	};

	const handleReset = () => {
		history.clearHistory();
		count.resetCount();
	};

	return (
		<div>
			<button onClick={handleClearCount}>Clear Count</button>
			<button onClick={handleClearHistory}>Clear History</button>
			<br />
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};
export default ClearHistory;
