const Input = ({ handleInputFields, value, name }) => {
	// console.log(value, name);
	return (
		<input
			type="number"
			name={name}
			value={value}
			onChange={handleInputFields}
		/>
	);
};
export default Input;
