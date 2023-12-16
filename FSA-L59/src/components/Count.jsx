import { useSelector } from 'react-redux';

const Count = () => {
	const count = useSelector((state) => state.count);
	console.log(count);
	return (
		<div>
			<h1>Count: {count}</h1>
		</div>
	);
};
export default Count;
