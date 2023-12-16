import { useDispatch } from 'react-redux';
import { INCREMENT, addHistory, incriment } from '../store';

const IncrimenntButton = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(incriment(1));
		dispatch(addHistory({ action: INCREMENT, count: 1 }));
	};

	return <button onClick={handleClick}>+</button>;
};
export default IncrimenntButton;
