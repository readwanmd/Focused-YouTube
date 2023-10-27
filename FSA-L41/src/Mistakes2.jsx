import { useEffect, useState } from 'react';

const Mistakes2 = () => {
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	console.log('first');
	// 	setInterval(() => {
	// 		setCount(count + 1);
	// 	}, 1000);
	// }, [count]);

	useEffect(() => {
		console.log('first');
		const interval = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<h4>Mistakes-2 ⬇</h4>
			<p>Count: {count}</p>
		</div>
	);
};
export default Mistakes2;
