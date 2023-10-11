import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CreateTask from './components/CreateTask';
import ShowTasks from './components/ShowTasks';

function App() {
	const [tasks, setTasks] = useState([]);
	const [visibility, setVisibility] = useState('all');

	// console.log(uuidv4());

	const addNewTask = (text) => {
		const task = {
			text,
			isCompleted: false,
			createdAt: new Date(),
			id: uuidv4(),
		};
		setTasks([task, ...tasks]);
	};

	const toggleComplete = (id) => {
		const newTasks = tasks.map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted;
			}
			return item;
		});
		setTasks(newTasks);
	};

	const handleVisibility = (text) => {
		setVisibility(text);
	};

	const getFilteredTasks = () => {
		if (visibility === 'completed') {
			return tasks.filter((item) => item.isCompleted);
		}
		if (visibility === 'incompleted') {
			return tasks.filter((item) => !item.isCompleted);
		}
		return tasks;
	};

	return (
		<div className="Wrapper">
			<h1>TODO List</h1>
			<CreateTask addNewTask={addNewTask} />
			<div className="filterBtn">
				<button onClick={() => handleVisibility('all')}>All</button>
				<button onClick={() => handleVisibility('completed')}>Completed</button>
				<button onClick={() => handleVisibility('incompleted')}>
					Incompleted
				</button>
			</div>

			<h5>
				<span style={{ textDecoration: 'underline' }}>
					Selected Visibility:
				</span>{' '}
				{visibility}
			</h5>
			<br />
			<ShowTasks tasks={getFilteredTasks()} toggleComplete={toggleComplete} />
		</div>
	);
}

export default App;
