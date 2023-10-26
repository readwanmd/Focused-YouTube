import { useEffect, useState } from 'react';

const cache = {};

const useApp = () => {
	const max = 10;
	const [count, setCount] = useState(1);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const handlePrevious = () => {
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};
	const handleNext = () => {
		if (count < max) {
			setCount((prev) => prev + 1);
		}
	};

	useEffect(() => {
		if (cache[`user-${count}`]) {
			setUser(cache[`user-${count}`]);
			return;
		}

		fatchData(count)
			.then((data) => setUser(data))
			.finally(() => setLoading(false));
	}, [count]);

	useEffect(() => {
		if (!cache[`user-${count + 1}`] && count < max) {
			fatchData(count + 1);
		}
	}, [count]);

	const fatchData = (id) => {
		return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				cache[`user-${id}`] = data;
				return data;
			});
	};

	return {
		max,
		count,
		user,
		loading,
		handlePrevious,
		handleNext,
	};
};

export default useApp;
