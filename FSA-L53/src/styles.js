import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		paddingTop: '30px',
	},
	buttons: {
		marginTop: '40px',
	},
	cardGrid: {
		padding: '20px 0',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	cardTitle: {
		textTransform: 'capitalize',
	},
	popupCardMedia: {
		width: '100%',
		height: '550px',
	},
	footer: {
		background: '#fff',
		padding: '50px 0',
	},
	pagination: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '40px',
	},
}));

export default useStyles;
