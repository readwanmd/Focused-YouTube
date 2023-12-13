import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const PlaylistCardItem = ({
	playlistThumbnail,
	playlistTitle,
	channelTitle,
}) => {
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
				<Typography variant="h6">{playlistTitle}</Typography>
				<Typography variant="body2" color="text.secondary">
					{channelTitle}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }}></Box>
			<CardActions>
				<Button
					component="label"
					variant="outlined"
					startIcon={<PlayArrowIcon />}
				>
					Play
				</Button>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default PlaylistCardItem;
