import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Button from '../ui/Button';

const OperationSection = ({ handleOperations, handleClear }) => {
	const operations = [
		{
			id: uuidv4(),
			text: '+',
			onclick: () => handleOperations('+'),
		},
		{
			id: uuidv4(),
			text: '-',
			onclick: () => handleOperations('-'),
		},
		{
			id: uuidv4(),
			text: '×',
			onclick: () => handleOperations('*'),
		},
		{
			id: uuidv4(),
			text: '÷',
			onclick: () => handleOperations('/'),
		},
		{
			id: uuidv4(),
			text: 'Clear',
			onclick: () => handleClear('Clear'),
		},
		// '+', '-', '*', '/', 'Clear'
	];

	return (
		<div className="op">
			<h4>Operations</h4>
			{operations.map((operation, index) => (
				<Button
					key={operation.id}
					text={operation.text}
					onClick={operation.onclick}
					customStyle={
						index === operations.length - 1 && { backgroundColor: '#fb3636' }
					}
				/>
			))}
		</div>
	);
};

OperationSection.propTypes = {
	handleClear: PropTypes.func.isRequired,
	handleOperations: PropTypes.func.isRequired,
};

export default OperationSection;
