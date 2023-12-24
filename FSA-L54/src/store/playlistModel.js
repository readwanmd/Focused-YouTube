import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../API';

const playlistModel = persist({
	items: [],
	id: '',
	title: '',
	description: '',
	thumbnail: '',
	channelId: '',
	channelTitle: '',

	setPlaylistData: action((state, payload) => {
		state = { ...payload };
		return state;
	}),

	getPlaylistData: thunk(async ({ setPlaylistData }, payload) => {
		const data = await getPlaylist(payload);
		setPlaylistData(data);
	}),
});

export default playlistModel;
