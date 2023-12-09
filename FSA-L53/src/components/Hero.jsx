import { Button, Container, Grid, Typography } from '@mui/material';
import useStyles from '../styles';

const Hero = () => {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth="sm">
				<header className={classes.header}>
					<Typography
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Photo Album
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						Hello Everyone! this is a photo album and I&apos;m trying to learn
						MUI by creating a simple photo album.
					</Typography>

					<div className={classes.buttons}>
						<Grid container spacing={1} justifyContent="center">
							<Grid item>
								<Button variant="contained" color="primary">
									Primary CTA
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">
									Secondary CTA
								</Button>
							</Grid>
						</Grid>
					</div>
				</header>
			</Container>
		</>
	);
};
export default Hero;
