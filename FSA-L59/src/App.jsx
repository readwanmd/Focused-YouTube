import './App.css';
import ClearHistory from './components/ClearHistory';
import Count from './components/Count';
import DecrimentButton from './components/DecrimentButton';
import History from './components/History';
import IncrimenntButton from './components/IncrimenntButton';

function App() {
	return (
		<>
			<Count />
			<div>
				<IncrimenntButton />
				<DecrimentButton />

				<ClearHistory />
			</div>

			<History />
		</>
	);
}

export default App;
