import useApp from './App_Hook';

const App = () => {
	const { max, count, user, loading, handlePrevious, handleNext } = useApp();

	return (
		<div>
			<h2>User Details</h2>
			<h4>
				user-{count} (@{user?.username.toLowerCase()})
			</h4>
			{loading && <div className="loader"></div>}
			{!loading && user && (
				<p>
					Name: {user?.name} <br />
					Email: {user?.email} <br />
					Phone: {user?.phone} <br />
				</p>
			)}

			<div style={{ display: 'flex', gap: '5px' }}>
				<button onClick={handlePrevious} disabled={count === 1}>
					Previous
				</button>
				<button onClick={handleNext} disabled={count === max}>
					Next
				</button>
			</div>
		</div>
	);
};
export default App;
