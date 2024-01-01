import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Player = ({ playlists }) => {
	let { playlistId } = useParams();
	const current = playlists.data[playlistId];
	console.log(current.playlistItems);
	const [currentVideoId, setCurrentVideoId] = useState(0);

	const handleNext = () => {
		if (currentVideoId < current.playlistItems.length - 1) {
			setCurrentVideoId((prev) => prev + 1);
		}
	};
	const handlePrev = () => {
		if (currentVideoId > 0) setCurrentVideoId((prev) => prev - 1);
	};

	const dateString =
		current?.playlistItems[currentVideoId]?.contentDetails.videoPublishedAt;
	const dateTime = new Date(dateString);

	const opts = {
		width: '100%',
		paddingTop: '56.25%',
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<Container>
			<Typography variant="h4" gutterBottom align="center">
				{current?.playlistTitle}
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} md={8}>
					<YouTube
						opts={opts}
						videoId={
							current?.playlistItems[currentVideoId].contentDetails.videoId
						}
					/>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Button
							size="small"
							variant="outlined"
							startIcon={<SkipPreviousIcon />}
							onClick={handlePrev}
						>
							Previous
						</Button>
						<Button
							size="small"
							variant="outlined"
							endIcon={<SkipNextIcon />}
							onClick={handleNext}
						>
							Next
						</Button>
					</Box>

					<Box mt={2}>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography variant="h6">
									{current?.playlistItems[currentVideoId]?.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="subtitle1" mb={1}>
									<span style={{ fontWeight: 'bold' }}>Published at:</span>{' '}
									{dateTime.toLocaleString()}
								</Typography>
								<Typography>
									{current?.playlistItems[currentVideoId]?.description}
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					mt={2}
					sx={{ width: '100%', height: '500px', overflowY: 'scroll' }}
				>
					{current.playlistItems.map((playlistItem, index) => (
						<Box
							key={index}
							onClick={() => setCurrentVideoId(index)}
							mt={1}
							sx={{
								display: 'flex',
								gap: 1,
								background: index === currentVideoId ? '#d4d4d4' : '#f3f3f3',
								cursor: 'pointer',
							}}
						>
							<img
								src={playlistItem.thumbnail.url}
								alt="thumbnail"
								width={133}
								height={75}
							/>
							<Typography variant="p">{playlistItem.title}</Typography>
						</Box>
					))}
				</Grid>
			</Grid>
		</Container>
	);
};
export default Player;
