import React from 'react';
import {Link} from 'react-router-dom'

import SideMenu from './togglemenu/SideMenu'

const NavBar = ({ toggleClickHandler, logo, home, projects, video, handleClickOnItem }) => {
	return (
		<nav>
			<SideMenu click={toggleClickHandler} />
			<div className="logo">{logo}</div>
			<ul className="menu" >
				<li>
					<Link to='/' alt="Home" >
						{home}
					</Link>
				</li>
				<li>
					<Link to='/projects' alt="projects" >
						{projects}
					</Link>
				</li>
				<li>
					<Link to='/video' alt="videos" >
						{video}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
