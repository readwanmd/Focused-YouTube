import { PhotoCamera } from '@mui/icons-material';
import { AppBar, Pagination, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import ImageCard from './components/ImageCard';
import useStyles from './styles';

const cards = [
	'city',
	'technology',
	'food',
	'plant',
	'winter',
	'productivity',
	'Bridges',
	'travel',
	'graffiti',
	'Gate',
	'building',
	'street',
	'forest',
	'summer',
	'flower',
	'efficiency',
	'Skyscrapers',
	'journey',
	'murals',
	'Arch',
	'skyscraper',
	'avenue',
	'coast',
	'structure',
	'diversity',
	'carnival',
	'cuisine',
	'festivity',
	'past',
	'locale',
	'artwork',
	'lane',
	'waterway',
	'bistro',
	'melody',
	'crowds',
	'occasion',
	'transit',
	'trade',
	'foliage',
	'silhouette',
	'heritage',
	'fashion',
	'progress',
	'wildlife',
	'courtyard',
	'business',
	'space',
	'outline',
	'activity',
	'township',
	'mosaic',
	'passage',
	'prosperity',
	'gathering',
	'innovation',
	'scenery',
	'plaza',
	'milestone',
	'reflection',
	'way of life',
	'custom',
	'variation',
	'destination',
	'nightlife',
	'promenade',
	'composition',
	'locale',
	'roadway',
	'ambiance',
];

const App = () => {
	const classes = useStyles();
	const [page, setPage] = useState({ start: 0, end: 10 });
	const handleChange = (e, p) => {
		switch (p) {
			case 1:
				setPage({ start: 0, end: 10 });
				break;
			case 2:
				setPage({ start: 10, end: 20 });
				break;
			case 3:
				setPage({ start: 20, end: 30 });
				break;
			case 4:
				setPage({ start: 30, end: 40 });
				break;
			case 5:
				setPage({ start: 40, end: 50 });
				break;
			case 6:
				setPage({ start: 50, end: 60 });
				break;
			case 7:
				setPage({ start: 60, end: 70 });
				break;

			default:
				break;
		}

		console.log(page.start);
	};

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
				<ImageCard cards={cards.slice(page.start, page.end)} />

				<Pagination
					count={7}
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
