import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PlaylistForm from '../playlist-form';

const Navbar = () => {
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
			<Box sx={{ flexGrow: 1, mb: '85px' }}>
				<AppBar position="fixed">
					<Toolbar>
						<Link
							to={'/'}
							component={RouterLink}
							sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
						>
							<Typography variant="h6" component="div">
								Focused Youtube
							</Typography>
						</Link>
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

			<PlaylistForm open={open} handleClose={handleClose} />
		</>
	);
};

export default Navbar;
