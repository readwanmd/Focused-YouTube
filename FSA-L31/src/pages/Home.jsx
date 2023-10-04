import { useState } from 'react';
import Layout from '../Components/Layout';
import Buttons from '../Components/buttons/Buttons';
import DisplayCount from '../Components/displayCount/displayCount';
import Input from '../Components/input/Input';

const Home = () => {
	const [count, setCount] = useState(100);
	const [incrementValue, setIncrementValue] = useState(10);
	const [decrementValue, setDecrementValue] = useState(5);

	function increment() {
		setCount((count) => count + incrementValue);
	}
	function decrement() {
		setCount((count) => count - decrementValue);
	}

	function handleIncrementChange(e) {
		setIncrementValue(parseInt(e.target.value));
	}
	function handleDecrementChange(e) {
		setDecrementValue(parseInt(e.target.value));
	}

	return (
		<Layout>
			<DisplayCount count={count} />

			<Input
				incrementValue={incrementValue}
				decrementValue={decrementValue}
				handleIncrementChange={handleIncrementChange}
				handleDecrementChange={handleDecrementChange}
			/>

			<Buttons increment={increment} decrement={decrement} />
		</Layout>
	);
};
export default Home;
