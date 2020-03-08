import React, { useEffect, useRef } from 'react';
import Triot from '../../images/triot_stage.jpg';
import bjc from '../../images/bjc.jpg';
import SocialMedia from '../socialmedia/SocialMedia';
import spotify_logo from '../../social-icons/spotify.svg';
import facebook_logo from '../../social-icons/facebook.svg';

import './projects.css';

const Projects_Sidebar = () => {
	const imageRef = useRef(null);

	const handleScroll = () => {
		const flip = document.querySelector('.hero-flip');
		const image = document.querySelector('.image');
		const rect = imageRef.current.getBoundingClientRect();

		let bodyClass = 'section4';

		if (window.innerWidth > 960 && image) {
			if (rect.top - window.innerHeight === 0 && rect.top - window.innerHeight > -259) {
				console.log(rect.top - window.innerHeight);
				bodyClass = 'section4';
				flip.innerText = 'My Projects';
				flip.style.color = '#f9c943';
			} else if (rect.top - window.innerHeight < -260) {
				bodyClass = 'section5';
				flip.innerText = 'Berardi\n Jazz\n Connection';
				flip.style.color = '#f9c943';
			} else {
				bodyClass = 'section4';
				flip.innerText = 'T-RIOT';
				flip.style.color = '#f9c943';
			}
		}
		document.body.className = bodyClass;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div className="info">
			<h1 className="pro" id="triot" ref={imageRef}>
				Projects
			</h1>
			<p className="info-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, illo quasi saepe inventore iusto
				facere maxime dolorum provident fugit assumenda. Adipisci aut sequi vel ex qui obcaecati repellat ipsum
				aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, illo quasi saepe inventore
				iusto facere maxime dolorum provident fugit assumenda. Adipisci aut sequi vel ex qui obcaecati repellat
				ipsum aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, illo quasi saepe
				inventore iusto facere maxime dolorum provident fugit assumenda. Adipisci aut sequi vel ex qui obcaecati
				repellat ipsum aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>

			<h1 className="pro" id="triot" ref={imageRef}>
				T-RIOT
			</h1>
			<p className="info-text">
				A rock-solid trio session, with a top-shelf Italian groove pedigree as the group features two members
				from Berardi Jazz Connection, and the pianist from Quintetto X! You might remember those two groups from
				their more club jazz-oriented projects from the previous decade or two,but this time around, all three
				musicians are in a straighter jazz vein, yet still one that's filled with plenty of rhythm! The piano,
				bass and drums come together fantastically here with Pietro Vincenti on acoustic keys, Camillo Pace on
				bass, and Francesco Lomagistro on drums.
			</p>
			<p className="info-text">
				A rock-solid trio session, with a top-shelf Italian groove pedigree as the group features two members
				from Berardi Jazz Connection, and the pianist from Quintetto X! You might remember those two groups from
				their more club jazz-oriented projects from the previous decade or two,but this time around, all three
				musicians are in a straighter jazz vein, yet still one that's filled with plenty of rhythm! The piano,
				bass and drums come together fantastically here with Pietro Vincenti on acoustic keys, Camillo Pace on
				bass, and Francesco Lomagistro on drums.
			</p>
			<img src={Triot} alt="T-riot on stage" />
			<div className="band-members">
				<ul className="triot-band-members">
					<li>
						<a>
							Drums: <span>Francesco Lomagistro</span>
						</a>
					</li>
					<li>
						<a>
							Bass player: <span>Camillo Pace</span>
						</a>
					</li>
					<li>
						<a>
							Keyboards: <span>Pietro Vincenti</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="media-icons">
				<SocialMedia icon={facebook_logo} link="https://www.facebook.com/lomagistropacevincenti/" />
				<SocialMedia icon={spotify_logo} link="https://open.spotify.com/album/5P5wFTt9zl2uzvv2HxELLh" />
			</div>

			<h1 className="pro" id="bjc" ref={imageRef}>
				Berardi Jazz Connection
			</h1>
			<p className="info-text">
				Berardi Jazz Connection was birthed by Francesco Lomagistro’s well-known drummer/percussionist idea to
				put together all the experiences that come from his passion for Afro – american music, the ‘groove’, and
				the synergy between rhythm and melody. The voyage started many years ago in the center of Taranto (south
				of Italy) on a street called Via Berardi where, Francesco had an apartment using it as a rehearsal
				studio. After many different experiences as “sideman” and different concerts around the world with both
				artists, in the year 2005 Francesco decided to “give life” to this project involving other Italian
				talents and international sp guests.
			</p>
			<img src={bjc} alt="Berardi Jazz Connection band" />
			<p className="info-text">
				Berardi Jazz Connection was birthed by Francesco Lomagistro’s well-known drummer/percussionist idea to
				put together all the experiences that come from his passion for Afro – american music, the ‘groove’, and
				the synergy between rhythm and melody. The voyage started many years ago in the center of Taranto (south
				of Italy) on a street called Via Berardi where, Francesco had an apartment using it as a rehearsal
				studio. After many different experiences as “sideman” and different concerts around the world with both
				artists, in the year 2005 Francesco decided to “give life” to this project involving other Italian
				talents and international sp guests.
			</p>
			<div className="band-members">
				<ul className="triot-band-members">
					<li>
						<a>
							Drums: <span>Francesco Lomagistro</span>
						</a>
					</li>
					<li>
						<a>
							Bass player: <span>Camillo Pace</span>
						</a>
					</li>
					<li>
						<a>
							Keyboards: <span>Pietro Vincenti</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="media-icons">
				<SocialMedia icon={facebook_logo} link="https://www.facebook.com/berardijazzconnection/" />
				<SocialMedia icon={spotify_logo} link="https://open.spotify.com/artist/6GUaa8teYHKlgnUeUAWQHc" />
			</div>
		</div>
	);
};

export default Projects_Sidebar;
