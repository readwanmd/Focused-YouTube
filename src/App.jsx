import { CssBaseline } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Player from './pages/Player';

const App = () => {
	// const { error, loading, playlistssss, getPlaylistById } = usePlaylist();
	const playlists = useStoreState((state) => state.playlists);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar />

			<Routes>
				<Route path="/" element={<Home playlists={playlists} />} />
				<Route
					path="/player/:playlistId"
					element={<Player playlists={playlists} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
