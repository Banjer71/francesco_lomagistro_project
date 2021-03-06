import React from 'react';
import SocialMedia from '../socialmedia/SocialMedia';
import facebook_logo from '../../social-icons/facebook.svg';
import youtube_logo from '../../social-icons/youtube.svg';
import instagram_logo from '../../social-icons/instagram.svg';
import mail_logo from '../../social-icons/mail.svg'


const Footer = () => {
	return (
		<footer>
			<div className="social-media-list">
				<h2 className="contacts">Contacts</h2>
				<div className="media-icons">
					<SocialMedia icon={mail_logo} link="mailto:francescolomagistro@gmail.com"/>
					<SocialMedia icon={facebook_logo} link="https://www.facebook.com/flomagistro" />
					<SocialMedia icon={youtube_logo} link="https://www.youtube.com/user/jofradrums/" />
					<SocialMedia icon={instagram_logo} link="https://www.instagram.com/lomagistrodrums/" />
				</div>

				<div className="spacer" />
				<p className="copyright">
					@2020 <a href="https://davidenaccarati.com">Davide Naccarati</a> All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
