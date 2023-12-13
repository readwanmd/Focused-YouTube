import { useEffect } from 'react';
import usePlaylist from './hooks/usePlaylist';

const App = () => {
	const { getPlaylistById, playlists, error, loading } = usePlaylist();

	useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
	}, []);

	console.log(playlists);
	console.log('error', error);
	console.log('loading', loading);

	return <div>App</div>;
};
export default App;
