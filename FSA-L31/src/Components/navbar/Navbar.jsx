import { Link } from '@reach/router';
import classes from './navbar.module.css';

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<nav className={classes.nav}>
				<div>
					<h1>Brand Name</h1>
				</div>
				<ul className={classes.navLinks}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/help">Help</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;
