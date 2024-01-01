import { action, persist } from 'easy-peasy';

const favoriteModel = persist(
	{
		items: [],

		addToFavorite: action((state, playlistId) => {
			if (state.items.includes(playlistId)) return;

			state.items.push(playlistId);
		}),

		removeFromFavorite: action((state, playlistId) => {
			if (state.items.includes(playlistId)) {
				state.items = state.items.filter((pid) => playlistId !== pid);
			} else return;
		}),
	},
	{
		storage: 'localStorage',
	}
);

export default favoriteModel;
