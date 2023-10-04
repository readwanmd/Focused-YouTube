import { Router } from '@reach/router';
import './App.css';
import About from './pages/about';
import Help from './pages/help';
import Home from './pages/home';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Help path="/help" />
			</Router>
		</>
	);
}

export default App;
