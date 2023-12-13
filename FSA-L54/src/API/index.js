import axios from 'axios';
console.log(import.meta.env.VITE_API_KEY);

const getPlaylist = async (playlistId, pageToken = '', result = []) => {
	const key = import.meta.env.VITE_API_KEY;
	const URl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

	const { data } = await axios.get(URl);

	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylist(playlistId, data.nextPageToken, result);
	}

	return result;
};

export default getPlaylist;
