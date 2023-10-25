import PropTypes from 'prop-types';

import NumberField from '../ui/NumberField';
const InputSection = ({ inputs, handleInputFields }) => {
	return (
		<div>
			<h4>Inputs</h4>
			<NumberField name="a" value={inputs.a} onChange={handleInputFields} />
			<NumberField name="b" value={inputs.b} onChange={handleInputFields} />
		</div>
	);
};

InputSection.propTypes = {
	inputs: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	handleInputFields: PropTypes.func.isRequired,
};
InputSection.defaultProps = {};

export default InputSection;
