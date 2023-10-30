import { useEffect, useState } from 'react';

const useFetchData = (url, callback) => {
	const [data, setData] = useState([]);
	const [dataLoading, setDataLoading] = useState(false);
	const [dataError, setDataError] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	// console.log(callback);

	const fetchData = async () => {
		setDataLoading(true);
		try {
			const res = await fetch(`${url}`);
			const data = await res.json();
			if (callback) {
				console.log(callback(data));
				setData(callback(data));
			} else {
				setData(data);
			}
			setDataError('');
			setDataLoading(false);
		} catch (error) {
			setDataError('server error');
			setDataLoading(false);
		}
	};

	return {
		data,
		dataLoading,
		dataError,
	};
};
export default useFetchData;
