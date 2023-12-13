import axios from 'axios';
const key = import.meta.env.VITE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken = '', result = []) => {
	const URl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

	const { data } = await axios.get(URl);

	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylistItem(playlistId, data.nextPageToken, result);
	}

	return result;
};

const getPlaylist = async (playlistId) => {
	const URl = `https://www.googleapis.com/youtube/v3/playlists?key=${key}&part=snippet&id=${playlistId}`;

	const { data } = await axios.get(URl);

	let playlistItems = await getPlaylistItem(playlistId);

	const {
		channelId,
		title: playlistTitle,
		description: playlistDescription,
		channelTitle,
		thumbnails,
	} = data?.items[0]?.snippet;

	playlistItems = playlistItems.map((item) => {
		const {
			title,
			description,
			thumbnails: { medium },
		} = item.snippet;

		return {
			title,
			description,
			thumbnail: medium,
			contentDetails: item.contentDetails,
		};
	});

	return {
		playlistId,
		playlistTitle,
		playlistDescription,
		playlistThumbnails: thumbnails.medium,
		channelId,
		channelTitle,
		playlistItems,
	};
};

export default getPlaylist;
