import React from 'react';
import { Link } from 'react-router-dom';
import './sidedrawer.css';

const sideDrawer = ({ show, handleClickOnItem }) => {
	let drawerClasses = [ 'side-drawer' ];

	if (show) {
		drawerClasses = [ 'side-drawer', 'open' ];
	}
	return (
		<div className={drawerClasses.join(' ')}>
			<ul>
				<li >
					<Link to="/" alt="Home" onClick={handleClickOnItem}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/projects" alt="projects" onClick={handleClickOnItem}>
						projects
					</Link>
				</li>
				<li>
					<Link to="/video" alt="videos" onClick={handleClickOnItem}>
						video
					</Link>
				</li>
				<li>
					<Link to="/book" alt="book" onClick={handleClickOnItem}>
						Book
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default sideDrawer;
