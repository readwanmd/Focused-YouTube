import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Checkbox } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaylistCardItem = ({
	playlistThumbnail,
	playlistTitle,
	channelTitle,
	playlistId,
	totalVideos,
}) => {
	const [checked, setChecked] = useState(false);
	const { addToFavorite, removeFromFavorite } = useStoreActions(
		(actions) => actions.favorites
	);

	const handleChange = () => {
		setChecked(!checked);

		checked ? removeFromFavorite(playlistId) : addToFavorite(playlistId);
	};

	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				component="img"
				height="194"
				image={playlistThumbnail?.url}
				alt={playlistTitle}
			/>
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography
						variant="caption"
						sx={{
							padding: '5px 10px',
							background: '#1976D2',
							color: '#fff',
							maxWidth: 'fit-content',
							borderRadius: '15px',
						}}
					>
						{channelTitle}
					</Typography>
					<Typography
						variant="caption"
						sx={{
							padding: '5px 10px',
							background: '#05203b',
							color: '#fff',
							maxWidth: 'fit-content',
							borderRadius: '15px',
						}}
					>
						{totalVideos} Videos
					</Typography>
				</Box>

				<Typography variant="h6" mt={2}>
					{playlistTitle}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }}></Box>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button
					to={`/player/${playlistId}`}
					component={Link}
					variant="outlined"
					startIcon={<PlayArrowIcon />}
				>
					Play
				</Button>

				<Checkbox
					checked={checked}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite />}
					onChange={handleChange}
				/>

				<Button
					onClick={() => removePlaylist(playlistId)}
					variant="outlined"
					color="error"
					startIcon={<Delete />}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default PlaylistCardItem;
