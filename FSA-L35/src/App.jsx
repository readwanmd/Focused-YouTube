import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import HistorySection from './components/History/HistorySection';
import OperationSection from './components/Operations/OperationSection';
import InputSection from './components/inputs/InputSection';

const initialInputState = {
	a: 0,
	b: 0,
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

		// const f = new Function(
		// 	'op',
		// 	`return ${inputState.a} ${op} ${inputState.b}`
		// );

		// setResult(f(op));
		const res = eval(`${inputState.a} ${op} ${inputState.b}`);
		setResult(res.toFixed(4));

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
			<InputSection inputs={inputState} handleInputFields={handleInputFields} />

			<OperationSection
				handleOperations={handleOperations}
				handleClear={handleClear}
			/>
			<HistorySection histories={histories} handleRestore={handleRestore} />
		</div>
	);
};
export default App;
