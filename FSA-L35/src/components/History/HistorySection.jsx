import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistorySection = ({ histories, handleRestore }) => {
	return (
		<div>
			<h4 className="ht">History</h4>
			{histories.length === 0 ? (
				<p>
					<small>There is no history available</small>
				</p>
			) : (
				histories.map((history) => (
					<ul key={history.id}>
						<HistoryItem history={history} handleRestore={handleRestore} />
					</ul>
				))
			)}
		</div>
	);
};

HistorySection.propTypes = {
	histories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			input: PropTypes.shape({
				a: PropTypes.number.isRequired,
				b: PropTypes.number.isRequired,
			}),
			operation: PropTypes.string.isRequired,
			date: PropTypes.object,
			result: PropTypes.number.isRequired,
		})
	).isRequired,
	handleRestore: PropTypes.func.isRequired,
};

export default HistorySection;
