import PropTypes from 'prop-types';
const NumberField = ({ value, name, onChange }) => {
	const styles = {
		color: '#000',
		backgroundColor: '#fff',
		padding: '5px',
		outline: 'none',
		border: '1px solid gray',
	};
	return (
		<input
			style={styles}
			type="number"
			name={name}
			value={value}
			onChange={onChange}
		/>
	);
};

NumberField.propTypes = {
	value: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
export default NumberField;
