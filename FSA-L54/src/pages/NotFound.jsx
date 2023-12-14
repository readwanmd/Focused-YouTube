import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '10px',
			}}
		>
			<Typography variant="h2" textAlign={'center'}>
				404 Not Found!
			</Typography>

			<Link to={'/'}>
				<Button variant="outlined">Back To Home</Button>
			</Link>
		</Box>
	);
};
export default NotFound;
