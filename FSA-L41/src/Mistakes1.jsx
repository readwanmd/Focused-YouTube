import { useEffect, useState } from 'react';

const Mistakes = () => {
	const [name, setName] = useState('');
	const [state, setState] = useState({
		name: '',
		selected: false,
	});

	const handleAdd = () => {
		setState((prev) => ({ ...prev, name }));
	};
	const handleSelect = () => {
		setState((prev) => ({ ...prev, selected: true }));
	};

	// Mistake ⬇
	// useEffect(() => {
	// 	console.count('the state is changed');
	// }, [state]);

	/* 
	! mistake is using object in dependency of useEffect()
	! object is a nonprimitive, thus everytime useEffect() compares this 
	! get false, thats why even sate is same thus its rerenderd 

	the solution of this is use useMemo() hook or use direct premitive data as a dependency
	*/

	// Solution ⬇
	useEffect(() => {
		console.count('the state is changed');
	}, [state.name, state.selected]);

	return (
		<div>
			<h2>Mistakes</h2>
			<h4>Mistakes-1 ⬇</h4>
			<input type="text" onChange={(e) => setName(e.target.value)} />

			<p>
				Name: {state.name}, Selected: {state.selected.toString()}
			</p>
			<button onClick={handleAdd}>Add Name</button>
			<button onClick={handleSelect}>Select</button>
		</div>
	);
};
export default Mistakes;
