import { useState } from 'react';

const useCounter = ({ start = 0, max = 10, step = 1 }) => {
	const [count, setCount] = useState(start);

	const handleIncrement = () => {
		if (count < max) {
			setCount((prev) => prev + step);
		}
	};
	const handleDecrement = () => {
		if (count > 0) {
			setCount((prev) => prev - step);
		}
	};

	return {
		count,
		handleIncrement,
		handleDecrement,
	};
};
export default useCounter;
