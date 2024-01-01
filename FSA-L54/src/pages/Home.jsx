import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { useStoreState } from 'easy-peasy';
import PlaylistCardItem from '../components/PlaylistCardItem';
const Home = ({ playlists }) => {
	const playlistArray = Object.values(playlists.data);
	const favoriteItems = useStoreState((state) => state.favorites.items);

	const favoriteArray = Object.values(favoriteItems);

	// console.log(playlists.data[favoriteItems[0]]);
	console.log(favoriteArray);

	return (
		<Container>
			<Box mb={2}>
				<Accordion defaultExpanded={true}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant="h5">Favorites</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{favoriteArray.length === 0 && (
							<Typography variant="p">There is no favorites yet!</Typography>
						)}

						<Grid container spacing={3} mb={4}>
							{favoriteArray.length > 0 &&
								favoriteArray.map((item) => (
									<Grid key={item} item xs={12} sm={6} md={4}>
										<PlaylistCardItem
											playlistId={playlists.data[item].playlistId}
											playlistThumbnail={
												playlists.data[item].playlistThumbnails
											}
											channelTitle={playlists.data[item].channelTitle}
											playlistTitle={playlists.data[item].playlistTitle}
											totalVideos={playlists.data[item].playlistItems.length}
										/>
									</Grid>
								))}
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Box>

			<Box>
				<Accordion defaultExpanded={true}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant="h5">Playlists</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{playlistArray.length === 0 && (
							<Typography variant="p">There is no playlists yet!</Typography>
						)}
						<Grid container spacing={3} mb={4}>
							{playlistArray.length > 0 &&
								playlistArray.map((item) => (
									<Grid key={item.playlistId} item xs={12} sm={6} md={4}>
										<PlaylistCardItem
											playlistId={item.playlistId}
											playlistThumbnail={item.playlistThumbnails}
											channelTitle={item.channelTitle}
											playlistTitle={item.playlistTitle}
											totalVideos={item.playlistItems.length}
										/>
									</Grid>
								))}
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Container>
	);
};
export default Home;
