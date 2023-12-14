import { Container, Grid } from '@mui/material';
import PlaylistCardItem from '../components/PlaylistCardItem';
const Home = ({ playlists }) => {
	const playlistArray = Object.values(playlists);

	return (
		<Container>
			<Grid container spacing={3}>
				{playlistArray.length > 0 &&
					playlistArray.map((item) => (
						<Grid key={item.playlistId} item xs={12} sm={6} md={4}>
							<PlaylistCardItem
								playlistId={item.playlistId}
								playlistThumbnail={item.playlistThumbnails}
								channelTitle={item.channelTitle}
								playlistTitle={item.playlistTitle}
							/>
						</Grid>
					))}
			</Grid>
		</Container>
	);
};
export default Home;
