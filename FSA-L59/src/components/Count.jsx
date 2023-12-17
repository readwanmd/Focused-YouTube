import { useStoreState } from 'easy-peasy';

const Count = () => {
	const count = useStoreState((state) => state.count);
	return (
		<div>
			<h1>Count: {count.value}</h1>
		</div>
	);
};
export default Count;
