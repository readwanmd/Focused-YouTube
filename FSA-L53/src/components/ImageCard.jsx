/* eslint-disable react/prop-types */
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import Popup from '../Popup';
import useStyles from '../styles';

const ImageCard = ({ cards }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [imagePass, setImagePass] = useState('');
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleImageChange = (e) => {
		setImagePass(e);
		handleClickOpen();
	};
	return (
		<>
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={2} justifyContent="center">
					{cards.map((card, index) => (
						<Grid item key={index} xs={12} sm={6} md={4} loading="lazy">
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={`https://source.unsplash.com/random/?${card}`}
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										gutterBottom
										className={classes.cardTitle}
									>
										{card}
									</Typography>
									<Typography>This is a media card</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										variant="contained"
										color="primary"
										sx={{ width: 1 }}
										onClick={() =>
											handleImageChange(
												`https://source.unsplash.com/random/?${card}`
											)
										}
									>
										View
									</Button>
								</CardActions>
							</Card>
							<Popup handleClose={handleClose} open={open} image={imagePass} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
export default ImageCard;
