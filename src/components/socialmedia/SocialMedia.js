import React from 'react';

const SocialMedia = ({ icon, link }) => {
	return (
		<ul className="media">
			<li className="social-media-li">
				<a className="social-icon" href={link} target="_alt" rel="noopener noreferrer">
					<img src={icon} alt="facebook icon" />
				</a>
			</li>
		</ul>
	);
};

export default SocialMedia;
