import PropTypes from 'prop-types';
const Button = ({ text, onClick, disabled, customStyle }) => {
	const style = {
		padding: '.25rem 1rem',
		backgroundColor: 'gray',
		color: '#fff',
		borderRadius: '.1rem',
		cursor: 'pointer',
		border: 'none',
		...customStyle,
	};
	// console.log(customStyle, disabled);
	return (
		<button onClick={onClick} disabled={disabled} style={style}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	customStyle: PropTypes.object,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	customStyle: {},
	disabled: false,
};

export default Button;
