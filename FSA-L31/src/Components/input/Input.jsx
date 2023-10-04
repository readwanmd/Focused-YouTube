const Input = ({
	incrementValue,
	decrementValue,
	handleDecrementChange,
	handleIncrementChange,
}) => {
	return (
		<div>
			<label htmlFor="">Increment</label>
			<input
				type="number"
				value={incrementValue}
				onChange={handleIncrementChange}
			/>
			<br />
			<label htmlFor="">Decrement</label>
			<input
				type="number"
				value={decrementValue}
				onChange={handleDecrementChange}
			/>
		</div>
	);
};
export default Input;
