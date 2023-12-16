import { useDispatch } from 'react-redux';
import { CLEAR_COUNT, addHistory, clearCount, clearHistory } from '../store';

const ClearHistory = () => {
	const dispatch = useDispatch();

	const handleClearHistory = () => {
		dispatch(clearHistory());
	};

	const handleClearCount = () => {
		dispatch(clearCount());
		dispatch(addHistory({ action: CLEAR_COUNT }));
	};

	return (
		<div>
			<button onClick={handleClearCount}>Clear Count</button>
			<button onClick={handleClearHistory}>Clear History</button>
		</div>
	);
};
export default ClearHistory;
