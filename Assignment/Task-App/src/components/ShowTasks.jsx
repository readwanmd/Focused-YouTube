const ShowTasks = ({ tasks, toggleComplete }) => {
	// // console.log(tasks);
	// const [edit, setEdit] = useState(false);
	// const [editText, setEditText] = useState('');

	// const handleUpdate = (et) => {
	// 	setEdit(true);
	// 	setEditText(et.text);
	// };

	// const handleUpdatedTask = () => {};

	return (
		<div>
			{/* {edit && (
				<div>
					<input
						type="text"
						placeholder="type your task"
						value={editText}
						onChange={(event) => setEditText(event.target.value)}
					/>
					<button onClick={() => console.log(editText)}>update</button>
				</div>
			)} */}

			{tasks.length > 0 ? (
				<ol>
					{tasks.map((task) => (
						<li
							key={task.id}
							onClick={() => toggleComplete(task.id)}
							className={task.isCompleted ? 'complete' : ''}
						>
							{task.text}{' '}
							{/* <span onClick={() => handleUpdate(task)}>&#9998;</span> */}
						</li>
					))}
				</ol>
			) : (
				<p>No task found</p>
			)}
		</div>
	);
};

export default ShowTasks;
