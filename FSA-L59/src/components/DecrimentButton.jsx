import { useDispatch } from 'react-redux';
import { DECREMENT, addHistory, decriment } from '../store';

const DecrimentButton = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(decriment(1));
		dispatch(addHistory({ action: DECREMENT, count: 1 }));
	};

	return <button onClick={handleClick}>-</button>;
};
export default DecrimentButton;
