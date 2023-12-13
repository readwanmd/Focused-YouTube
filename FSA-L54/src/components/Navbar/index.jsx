import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PlaylistForm from '../playlist-form';

const Navbar = ({ getPlaylistById }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getPlaylistId = (playlistId) => {
		getPlaylistById(playlistId);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Focused Youtube
						</Typography>
						<Button
							color="inherit"
							style={{ backgroundColor: '#ffffff', color: '#000000' }}
							onClick={handleClickOpen}
						>
							Add Playlist
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<PlaylistForm
				open={open}
				handleClose={handleClose}
				getPlaylistId={getPlaylistId}
			/>
		</>
	);
};

export default Navbar;
