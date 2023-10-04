import Footer from './footer.jsx/footer';
import Navbar from './navbar/Navbar';

const Layout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};
export default Layout;
