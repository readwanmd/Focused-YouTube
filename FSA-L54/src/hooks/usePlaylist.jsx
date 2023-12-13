import { useState } from 'react';
import getPlaylist from '../API';

const usePlaylist = () => {
	const [state, setState] = useState({
		playlists: {},
		recentPlaylists: [],
		favorites: [],
	});

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

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
			recentPlaylists: [...prev, playlistId],
		}));
	};

	const getPlaylistsByIds = (ids = []) => {
		return ids.map((id) => state.playlists[id]);
	};

	return {
		playlists: state.playlists,
		favorites: getPlaylistsByIds(state.favorites),
		recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
		getPlaylistById,
		addToRecent,
		addToFavorites,
		error,
		loading,
	};
};

export default usePlaylist;
