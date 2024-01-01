import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../API';

const playlistModel = persist(
	{
		data: {},
		error: '',
		isLoading: false,

		addPlaylist: action((state, payload) => {
			state.data[payload.playlistId] = payload;
		}),

		deletePlaylist: action((state, playlistId) => {
			if (state.data[playlistId]) {
				delete state.data[playlistId];
			} else {
				state.error = 'Playlist not found';
			}
		}),

		setLoading: action((state, payload) => {
			state.isLoading = payload;
		}),

		setError: action((state, payload) => {
			state.error = payload;
		}),

		getPlaylist: thunk(async (action, playlistId, { getState }) => {
			if (getState().data[playlistId]) {
				console.log('api call called');
				return;
			}

			action.setLoading(true);
			try {
				const playlist = await getPlaylist(playlistId);
				action.addPlaylist(playlist);
			} catch (error) {
				action.setError(
					error.response?.data?.message || 'Something went wrong'
				);
			} finally {
				action.setLoading(false);
			}
		}),
	},
	{
		storage: 'localStorage',
	}
);

export default playlistModel;
