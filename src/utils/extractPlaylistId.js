function extractPlaylistId(url) {
	const regex = /[?&]list=([^&]+)/;
	const match = url.match(regex);

	if (match) {
		return match[1];
	} else {
		return null;
	}
}

export default extractPlaylistId;
