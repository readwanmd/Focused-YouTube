import classes from './footer.module.css';

const Footer = () => {
	return (
		<footer>
			<div className={classes.footer}>
				<div>
					<h1>Brand Name</h1>
				</div>

				<div className={classes.links}>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Help</li>
						<li>Home</li>
						<li>About</li>
						<li>Help</li>
					</ul>
				</div>
			</div>
			<small>&copy; all rights reserved.</small>
		</footer>
	);
};
export default Footer;
