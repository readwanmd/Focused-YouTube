import { CssBaseline } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import usePlaylist from './hooks/usePlaylist';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Player from './pages/Player';

const playlistId = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl';

const App = () => {
	const { error, loading, playlists, getPlaylistById } = usePlaylist();

	const playlist = useStoreActions((actions) => actions.playlist);
	useEffect(() => {
		playlist.getPlaylistData(playlistId);
	}, []);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar getPlaylistById={getPlaylistById} />

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
