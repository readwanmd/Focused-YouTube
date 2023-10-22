import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

const initialInputState = {
	a: 20,
	b: 10,
};

const App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);
	const [histories, setHistories] = useState([]);
	const handleInputFields = (e) => {
		setInputState({
			...inputState,
			[e.target.name]: Number(e.target.value),
		});
	};

	const handleOperations = (op) => {
		if ((!inputState.a || !inputState.b) && op === '/') {
			alert('Invalid input');
			return;
		}

		const f = new Function(
			'op',
			`return ${inputState.a} ${op} ${inputState.b}`
		);

		// setResult(f(op));
		const res = eval(`${inputState.a} ${op} ${inputState.b}`);
		setResult(res);

		const history = {
			id: uuidv4(),
			input: inputState,
			operation: op,
			date: new Date(),
			result: res,
		};

		setHistories([history, ...histories]);
	};

	const handleRestore = (history) => {
		setInputState({
			...history.input,
		});
		setResult(history.result);
	};

	const handleClear = () => {
		setInputState({ ...initialInputState });
		setResult(0);
	};

	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<div>
				<h4>Inputs</h4>
				<input
					type="number"
					name="a"
					value={inputState.a}
					onChange={handleInputFields}
				/>
				<input
					type="number"
					name="b"
					value={inputState.b}
					onChange={handleInputFields}
				/>
			</div>
			<div className="op">
				<h4>Operations</h4>
				<button onClick={() => handleOperations('+')}>+</button>
				<button onClick={() => handleOperations('-')}>-</button>
				<button onClick={() => handleOperations('*')}>*</button>
				<button onClick={() => handleOperations('/')}>/</button>
				<button onClick={handleClear}>Clear</button>
			</div>
			<div>
				<h4 className="ht">History</h4>
				{histories.length === 0 ? (
					<p>
						<small>There is no history available</small>
					</p>
				) : (
					histories.map((history) => (
						<ul key={history.id}>
							<li>
								<div style={{ display: 'flex', gap: '1rem' }}>
									<p>
										{`${history.input.a} ${history.operation}	${history.input.b} = ${history.result} `}
									</p>
									<button onClick={() => handleRestore(history)}>
										Restore
									</button>
								</div>
								<small>{`${history.date.toLocaleDateString()} - ${history.date.toLocaleTimeString()}`}</small>
							</li>
						</ul>
					))
				)}
			</div>
		</div>
	);
};
export default App;
