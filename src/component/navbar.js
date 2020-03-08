import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar-light bg-light">
			<ul className="nav justify-content-center">
				<Link to="/" className="nav-link"><li className="nav-item">Profile</li></Link>
				<Link to="/gallery" className="nav-link"><li className="nav-item">Gallery</li></Link>
				<Link to="/contact" className="nav-link"><li className="nav-item">Contact</li></Link>
			</ul>
		</div>
	)
}

export default Navbar;