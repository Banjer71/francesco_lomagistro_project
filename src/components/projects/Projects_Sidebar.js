import React, { useEffect, useRef } from 'react';
import Triot from '../../images/triot_stage.jpg';
import bjc from '../../images/bjc.jpg';
import SocialMedia from '../socialmedia/SocialMedia';
import spotify_logo from '../../social-icons/spotify.svg';
import facebook_logo from '../../social-icons/facebook.svg';
import bjc_founders from '../../images/bjc_founders.jpg'

import './projects.css';

const Projects_Sidebar = () => {
	const imageRef = useRef(null);

	const handleScroll = () => {
		const flip = document.querySelector('.hero-flip');
		const image = document.querySelector('.image');
		const rect = imageRef.current.getBoundingClientRect();
		console.log(rect);

		let bodyClass = 'section4';

		if (window.innerWidth > 960 && image) {
			if (rect.top - window.innerHeight === 0 && rect.top - window.innerHeight > -259) {
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
		<div className="info" id="projects">
			<h1 className="pro" id="triot" ref={imageRef}>
				T-RIOT
			</h1>
			<p className="info-text" style={{ fontStyle: 'italic', fontSize: '15px', padding: '30px' }}>
				A rock-solid trio session, with a top-shelf Italian groove pedigree ...
			</p>
			<p className="info-text">
				Questa la descrizione di “Dusty Groove” (Chicago ) di questo nuovo progetto tutto pugliese ma ormai di
				caratura internazionale.
			</p>
			<p className="info-text">
				Tre musicisti pugliesi da tempo noti alle scene jazz e non solo, nazionali ed internazionali, che si
				rincontrano dopo diversi anni di perigrazioni sonore personali e variegate. La band è stata formata alla
				fine del 2015, grazie al batterista Francesco Lomagistro. Pietro Vincenti al piano, Camillo Pace al
				contrabbasso e Francesco Lomagistro alla batteria, convogliano le loro esperienze e la loro affinità
				artistica in un nuovo viaggio che si chiamerà "A Different Truth", il primo album di questa band,
				interamente registrato dal vivo nel Maggio 2016 e prodotto e distribuito un anno dopo dall’etichetta
				giapponese Albòre Jazz di Satoshi Toyoda. L’album sarà nominato fra i migliori dell’anno da Jazz Fm
				(Londra) e sarà in vetta alle classifiche di iTunes Jazz in vari paesi di Europa, Finlandia in testa;
				verrà programmato da diversi network radiofonici nel mondo e otterrà diversi consensi dalla stampa
				internazionale. Il trio conquisterà il pubblico asiatico con un tour conclusosi a Giugno 2018 toccando
				città come Bangkok e Hong Kong
			</p>
			<p className="info-text" style={{ fontStyle: 'italic', fontSize: '15px', padding: '30px' }}>
				“Energia frizzante messa su con criterio e con l’eleganza tipica degli anni Sessanta-Settanta, senza
				alcuna copiatura.” - Musica Jazz
			</p>
			<p className="info-text" style={{ fontStyle: 'italic', fontSize: '15px', padding: '30px' }}>
				"It’s a super album." - Ruth Fisher (Presenter Jazz FM London)
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
				I BJC nascono dall' idea di Francesco Lomagistro (Batteria e Percussioni) di convogliare tutte le
				esperienze nella passione per la musica Afroamericana, la ricerca del “groove", la sinergia fra ritmo e
				melodia.. Ettore Carucci (Piano) è co-Leader e compagno indispensabile, nonchè al timone con Francesco
				in questo viaggio iniziato diversi anni fa, la cui partenza è proprio da via "Berardi", una via del
				centro di Taranto, dove Francesco aveva la sua reharsal room . Dopo diverse esperienze come "sidemen"
				nel pop, nel jazz, e altri contesti, Francesco ed Ettore decidono di dare vita a questo progetto. i
				Primi 3 dischi sono stati prodotti da Antibemusic (Italy) e P-Vine Records (Giappone).
			</p>
			<img src={bjc} alt="Berardi Jazz Connection band" />
			<p className="info-text">
				Con i loro 3 dischi The way i like , Do it e Anyway si sono conquistati un posto nel panorama fra le
				nuove realtà del jazz europeo, sono stati programmati da diverse radio di Europa, Giappone e Stati
				Uniti.. Conosciuti dal grande pubblico anche grazie a “Change” brano della nota band anni 80, i Tears
				for Fears, arrangiato in occasione dell’uscita del secondo album “Do it” e programmato all’estero e in
				Italia da diversi network come Radio Montecarlo, Capital, Radio Dj. Una loro composizione Walking in the
				Village tratta dall’ultimo album Anyway, è stata prescelta fra i 25 top tunes del 2010 in Giappone da
				Tokyo Jazz Notes. il 4° disco “A new journey “ vede al timone solo Francesco Lomagistro che sarà
				accompagnato da alcuni nuovi elementi nella band , come Michele Campobasso al e Francesco Lento alla
				tromba.
			</p>
			<p className="info-text" style={{ fontStyle: 'italic', fontSize: '15px', padding: '30px' }}>
				..A cool combo from the Italian scene --The sound here is a great mix of modern club jazz and older 60s
				modes -- played in styles that recall the sound of Prestige or Riverside from years back, but which also
				tunes the rhythms towards some of the more contemporary modes explored by the best underground jazz
				groups of the European scene of late!<br />
				<span style={{ fontWeight: 'Bold' }}>“Dusty Groove“</span>
			</p>
			<p className="info-text" style={{ fontStyle: 'italic', fontSize: '15px', padding: '30px' }}>
				This Italian band meshes tasteful, modern production with incredible live' playing, and the result is a
				joyous celebration of jazz artistry. The grooves are a hipster's paradise, yet the overall sound is
				accessible to everyone. It's one of the top CDs in my stack by a band that I'd love to see in a smoky
				club, with a neat martini in one hand and a sloppy cigar in the other. Picks: Mr. Rhodes, Offside, Una
				Mas.<br />
				<span style={{ fontWeight: 'bold' }}>“RAFE GOMEZ (Dj network Smoth Jazz 101.9 New York)“</span>
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
			<img src={bjc_founders} alt="Berardi Jazz Connection band" />
			
			<hr/>
			<h1>English version</h1>
			<h1 className="pro" id="triot">
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
			<h1 className="pro" id="bjc">
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
		</div>
	);
};

export default Projects_Sidebar;
