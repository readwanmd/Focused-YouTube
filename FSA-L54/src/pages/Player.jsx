import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Player = ({ playlists }) => {
	let { playlistId } = useParams();
	const current = playlists[playlistId];

	return (
		<Container>
			<Typography variant="h4" gutterBottom align="center">
				{current?.playlistTitle}
			</Typography>
			<Typography variant="body1" align="center">
				{current?.playlistDescription}
			</Typography>
		</Container>
	);
};
export default Player;
