const History = ({ history, handleRestore }) => {
	return (
		<li>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<p>
					{`${history.input.a} ${history.operation}	${history.input.b} = ${history.result} `}
				</p>
				<button onClick={() => handleRestore(history)}>Restore</button>
			</div>
			<small>{`${history.date.toLocaleDateString()} - ${history.date.toLocaleTimeString()}`}</small>
		</li>
	);
};
export default History;
