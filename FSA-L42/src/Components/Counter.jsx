import useCounter from '../hooks/useCounter';

const Counter = (props) => {
	const { count, handleIncrement, handleDecrement } = useCounter({ ...props });
	return (
		<div>
			<button onClick={handleDecrement}>-</button>
			<p
				style={{
					display: 'inline-block',
					margin: 0,
					width: '30px',
					textAlign: 'center',
				}}
			>
				{count}
			</p>
			<button onClick={handleIncrement}>+</button>
		</div>
	);
};
export default Counter;
