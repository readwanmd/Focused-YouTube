/* eslint-disable react/prop-types */
import { Card, CardMedia, Dialog, Typography } from '@mui/material';
import useStyles from './styles';
const Popup = ({ handleClose, open, image: cardImage }) => {
	const classes = useStyles();

	return (
		<>
			<Dialog hideBackdrp onClose={handleClose} open={open} maxWidth="md">
				<Card className={classes.card}>
					<CardMedia
						className={classes.cardMedia}
						image={cardImage}
						title="Image title"
					/>
				</Card>
				<Typography varient="h6">
					A short description of the the image that describes the image
					properly.
				</Typography>
				{/* <img src={cardImage} alt="" className={classes.popupCardMedia} /> */}
			</Dialog>
		</>
	);
};
export default Popup;
