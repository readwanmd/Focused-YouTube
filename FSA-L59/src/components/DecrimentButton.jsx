import { useStoreActions } from 'easy-peasy';

const DecrimentButton = () => {
	const { count, history } = useStoreActions((actions) => actions);

	const handleClick = () => {
		count.decrement(1);
		history.addHistory({ action: 'decrement', count: 1 });
	};

	return <button onClick={handleClick}>-</button>;
};
export default DecrimentButton;
