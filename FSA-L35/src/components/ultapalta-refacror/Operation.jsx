import Button from '../ui/Button';

const Operation = ({ op, handleOperations, handleClear }) => {
	return (
		<Button
			text={op}
			onClick={op == 'Clear' ? handleClear : () => handleOperations(op)}
		></Button>
	);
};
export default Operation;
