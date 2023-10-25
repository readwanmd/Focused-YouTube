import PropTypes from 'prop-types';
import Button from '../ui/Button';

const HistoryItem = ({ history, handleRestore }) => {
	return (
		<li>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<p>
					{`${history.input.a} ${history.operation}	${history.input.b} = ${history.result} `}
				</p>
				<Button
					text="Restore"
					onClick={() => handleRestore(history)}
					customStyle={{ backgroundColor: '#096294' }}
				/>
			</div>
			<small>{`${history.date.toLocaleDateString()} - ${history.date.toLocaleTimeString()}`}</small>
		</li>
	);
};

HistoryItem.propTypes = {
	history: PropTypes.shape({
		id: PropTypes.string.isRequired,
		input: PropTypes.shape({
			a: PropTypes.number.isRequired,
			b: PropTypes.number.isRequired,
		}),
		operation: PropTypes.string.isRequired,
		date: PropTypes.object,
		result: PropTypes.number.isRequired,
	}).isRequired,
	handleRestore: PropTypes.func.isRequired,
};

export default HistoryItem;
