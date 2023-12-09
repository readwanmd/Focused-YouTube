import { PhotoCamera } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Pagination,
	Select,
	Toolbar,
	Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import ImageCard from './components/ImageCard';
import useStyles from './styles';

import { cards } from './constants';

const App = () => {
	const classes = useStyles();
	const [postPerPage, setPostPerPage] = useState(5);
	const [page, setPage] = useState({ start: 0, end: postPerPage });

	const handleChange = (e, p) => {
		let indexOfLast = postPerPage * p;
		let indexOfFirst = indexOfLast - postPerPage;
		setPage({ start: indexOfFirst, end: indexOfLast });
	};

	const handleChangePostPerPage = (event) => {
		setPostPerPage(event.target.value);
	};

	useEffect(() => {
		setPage({ start: 0, end: postPerPage });
	}, [postPerPage]);

	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera sx={{ mr: 1 }} />
					<Typography varient="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>

			<main>
				<Hero />

				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box sx={{ minWidth: 200, mt: 4 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Post per page
							</InputLabel>
							<Select
								value={postPerPage}
								label="Post Per Page"
								onChange={handleChangePostPerPage}
							>
								<MenuItem value={5}>Five</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={14}>Fourteen</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Container>

				<ImageCard cards={cards.slice(page.start, page.end)} />

				<Pagination
					count={cards.length / postPerPage}
					color="primary"
					className={classes.pagination}
					onChange={handleChange}
				/>
			</main>

			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer content
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					Some Footer content for the footer of the page.
				</Typography>
			</footer>
		</>
	);
};

export default App;
