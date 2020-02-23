import React, { useEffect, useRef } from 'react';
import facebook from './social-icons/facebook.svg';
import youtube from './social-icons/youtube.svg';
import instagram from './social-icons/instagram.svg';
import Triot from './images/triot.jpg';
import bjc from './images/bjc.jpg';
import './App.css';

function App() {
	const imageRef = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const bgImg = document.querySelector('#bg-image');
			const navUl = document.querySelector('nav ul');
			const footer = document.querySelector('.copyright');
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect();
				console.log(rect.top - window.innerHeight);
				if (rect.top - window.innerHeight <= 20 && rect.top - window.innerHeight > -259) {
					bgImg.style.backgroundImage = 'url(/assets/triot.jpg)';
					bgImg.style.backgroundSize = 'cover';
					bgImg.classList.add('fade-in');
					navUl.style.backgroundColor = '#f9c943';
					footer.style.backgroundColor = '#f9c943';
				} else if (rect.top - window.innerHeight < -260) {
					bgImg.style.backgroundImage = 'url(/assets/bjc.jpg)';
					bgImg.classList.add('fade-in');
					bgImg.style.backgroundPosition = 'top';
					navUl.style.backgroundColor = '#5bc63d';
					footer.style.backgroundColor = '#5bc63d';
				} else {
					bgImg.style.backgroundImage = 'url(/assets/hero-desktop-fl.jpg)';
					bgImg.style.backgroundSize = 'auto';
					bgImg.style.backgroundPosition = 'top right';
					navUl.style.backgroundColor = '#75accb';
					footer.style.backgroundColor = '#75accb';
				}
			}
		});
	});

	return (
		<div className="App">
			<div className="container">
				<nav>
					<div className="logo">Francesco Lomagistro</div>
					<ul className="menu">
						<li>
							<a href="#music" alt="music">
								Home
							</a>
						</li>
						<li>
							<a href="#music" alt="music">
								Projects
							</a>
						</li>
						<li>
							<a href="#music" alt="music">
								Video
							</a>
						</li>
					</ul>
				</nav>
				<header id="bg-image">
					<div className="header-logo">
						<h2 className="hero-flip">
							Drummer<br />Percussionist<br />Educator
						</h2>
					</div>
				</header>
				<div className="side-bar">
					<section className="primary-section">
						<div className="info">
							<h1 className="pro" id="fl" ref={imageRef}>
								Francesco Lomagsitro
							</h1>
							<p className="info-text">
								Francesco Lomagistro, began piano studies at age of 11 and later switched to drums. He
								received his music education through private lessons and attendance at seminars by great
								musical Masters. He received his Degree in ‘Percussion Instruments’ at the “Niccolo
								Piccinni” Music Conservatory in Bari, Italy and the Degree in “Didactis for Musical
								Instruments ” He teaches “Drums and Percussions” at Liceo Musicale in Italy and make
								clinics over all the Country.
							</p>
							<p className="info-text">
								He leads the group Berardi Jazz Connection, a European jazz project whose release 4 cd
								well known around the world, Japan ahead, and Usa and North Europe, and since 2016 he
								formed a new trio project the T-Riot, with which he released the first cd "A different
								truth" for the japanese label Albòre Jazz, conquering new fans in Japan, North Europe,
								South Africa and Usa; the cd has been in some jazz top charts, and on May 2018 they made
								a tour in Asia , playing in theatres and venues in Bangkok and Honk Kong.
							</p>
							<p className="info-text">
								His versatility has afforded him experience in different musical ambients collaborating
								with a lot of different artists; some of his compositions have been included in many
								compilations around the world and have been featured in the top jazz charts.
							</p>
							<p className="info-text">
								He has participated in different recording sessions for different labels such as Virgin,
								Universal, Hobo-Sony, Edel, Storie di Note, Irma Records, Antibemusic, Family Affairs,
								Flaminio Jazz, P-Vine records, Four, Caffè Concerto, Dodicilune, Self, Jazz
								Engine/Auand.
							</p>
							<p className="info-text">
								He performed in different venues as theatres, clubs and festivals in Europe, USA and
								Asia. He is international endorser with Paiste and Vic Firth.
							</p>
							<h1 className="pro" id="triot" ref={imageRef}>
								T-RIOT
							</h1>
							<img src={Triot} alt="T-riot on stage" />
							<p className="info-text">
								A rock-solid trio session, with a top-shelf Italian groove pedigree as the group
								features two members from Berardi Jazz Connection, and the pianist from Quintetto X! You
								might remember those two groups from their more club jazz-oriented projects from the
								previous decade or two,but this time around, all three musicians are in a straighter
								jazz vein, yet still one that's filled with plenty of rhythm! The piano, bass and drums
								come together fantastically here with Pietro Vincenti on acoustic keys, Camillo Pace on
								bass, and Francesco Lomagistro on drums.
							</p>
							<h1 className="pro" id="bjc" ref={imageRef}>
								Berardi Jazz Connection
							</h1>
							<img src={bjc} alt="Berardi Jazz Connection band" />
							<p className="info-text">
								<a
									href="http://www.berardijazzconnection.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="BJC">Berardi Jazz Connection</span>
								</a>{' '}
								was birthed by Francesco Lomagistro’s well-known drummer/percussionist idea to put
								together all the experiences that come from his passion for Afro – american music, the
								‘groove’, and the synergy between rhythm and melody. The voyage started many years ago
								in the center of Taranto (south of Italy) on a street called Via Berardi where,
								Francesco had an apartment using it as a rehearsal studio. After many different
								experiences as “sideman” and different concerts around the world with both artists, in
								the year 2005 Francesco decided to “give life” to this project involving other Italian
								talents and international sp guests.
							</p>
						</div>
					</section>
				</div>
				<footer>
					<div className="social-media-list">
						<h2 className="contacts">Contacts</h2>
						<ul className="media">
							<li className="social-media-li">
								<a
									className="social-icon"
									href="https://www.facebook.com/flomagistro"
									target="_alt"
									rel="noopener noreferrer"
								>
									<img src={facebook} alt="facebook icon" />
								</a>
							</li>
							<li className="social-media-li">
								<a
									className="social-icon"
									href="https://www.instagram.com/lomagistrodrums/?hl=it"
									target="_alt"
									rel="noopener noreferrer"
								>
									<img src={instagram} alt="instagram icon" />
								</a>
							</li>
							<li className="social-media-li">
								<a
									className="social-icon"
									href="https://www.youtube.com/user/jofradrums"
									target="_alt"
									rel="noopener noreferrer"
								>
									<img src={youtube} alt="youtube icon" />
								</a>
							</li>
						</ul>
						<div className="spacer" />
						<p className="copyright">
							@2020 <a href="https://davidenaccarati.com">Davide Naccarati</a>All rights reserved
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
