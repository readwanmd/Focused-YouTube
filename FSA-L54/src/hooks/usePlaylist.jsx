import { useEffect, useState } from 'react';
import getPlaylist from '../API';
import storage from '../utils/Storage';

const STORAGE_KEY = 'fy__playlist-state';
const INIT_STATE = {
	playlists: {},
	recents: [],
	favorites: [],
};

const usePlaylist = () => {
	const [state, setState] = useState(INIT_STATE);

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const state = storage.get(STORAGE_KEY);
		console.log('localData', state);
		if (state) {
			setState({ ...state });
		}
	}, []);

	useEffect(() => {
		if (state !== INIT_STATE) {
			storage.save(STORAGE_KEY, state);
		}
	}, [state]);

	const getPlaylistById = async (playlistId, force = false) => {
		if (state.playlists[playlistId] && !force) {
			return;
		}

		setLoading(true);

		try {
			const playlist = await getPlaylist(playlistId);
			setError('');
			setState((prev) => ({
				...prev,
				playlists: {
					...prev.playlists,
					[playlistId]: playlist,
				},
			}));
		} catch (err) {
			setError(err?.response?.data?.error?.message || 'Something went wrong!');
		} finally {
			setLoading(false);
		}
	};

	const addToFavorites = (playlistId) => {
		setState((prev) => ({
			...prev,
			favorites: [...prev, playlistId],
		}));
	};

	const addToRecent = (playlistId) => {
		setState((prev) => ({
			...prev,
			recents: [...prev, playlistId],
		}));
	};

	const getPlaylistsByIds = (ids = []) => {
		return ids.map((id) => state.playlists[id]);
	};

	return {
		playlists: state.playlists,
		favorites: getPlaylistsByIds(state.favorites),
		recents: getPlaylistsByIds(state.recents),
		getPlaylistById,
		addToRecent,
		addToFavorites,
		error,
		loading,
	};
};

export default usePlaylist;
