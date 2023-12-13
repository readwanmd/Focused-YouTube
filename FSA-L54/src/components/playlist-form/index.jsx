import { Alert, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
	const [state, setState] = useState('');
	const [notify, setNotify] = useState({
		open: false,
		message: '',
		type: '',
	});

	const handleSubmit = (e) => {
		// handle url latter
		if (!state) {
			setNotify({
				open: true,
				message: 'No valid playlist ID or link has been provided.',
				type: 'warning',
			});
		} else {
			getPlaylistId(state);
			setState('');
			handleClose();
			setNotify({
				open: true,
				message: `API call in progress. Please wait for the response.`,
				type: 'success',
			});
		}
	};

	return (
		<>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add Playlist</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To add playlist to this website, please enter a valid youtube
						playlist link or playlist id.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Playlist Link"
						type="text"
						fullWidth
						variant="standard"
						onChange={(e) => setState(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="outlined" sx={{ mb: 2 }}>
						Cancel
					</Button>
					<Button
						onClick={handleSubmit}
						variant="contained"
						sx={{ mr: 2, mb: 2 }}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>

			<Snackbar
				open={notify.open}
				autoHideDuration={2000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				onClose={() => setNotify(false)}
			>
				<Alert severity={notify.type}>{notify.message}</Alert>
			</Snackbar>
		</>
	);
};

export default PlaylistForm;
