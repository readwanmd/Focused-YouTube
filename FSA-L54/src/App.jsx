import { Container, CssBaseline, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import PlaylistCardItem from './components/PlaylistCardItem';
import usePlaylist from './hooks/usePlaylist';

const App = () => {
	const { error, loading, playlists, getPlaylistById } = usePlaylist();

	const playlistArray = Object.values(playlists);

	return (
		<>
			<CssBaseline />
			<Navbar getPlaylistById={getPlaylistById} />
			<Container>
				<h1>Hello World!</h1>
				<Grid container spacing={3}>
					{playlistArray.length > 0 &&
						playlistArray.map((item) => (
							<Grid item xs={12} sm={6} md={4}>
								{' '}
								<PlaylistCardItem
									playlistThumbnail={item.playlistThumbnails}
									channelTitle={item.channelTitle}
									playlistTitle={item.playlistTitle}
								/>
							</Grid>
						))}
				</Grid>
			</Container>
		</>
	);
};
export default App;
