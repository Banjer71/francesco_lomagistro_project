import React, { useEffect, useRef } from 'react';
import fl1 from '../../images/francesco_top.jpg';
import fl2 from '../../images/main_large.jpg';

const FL_Sidebar_Info = () => {
	const imageRef = useRef(null);

	const handleScroll = () => {
		const flip = document.querySelector('.hero-flip');
		const rect = imageRef.current.getBoundingClientRect();

		let bodyClass = 'section1';

		if (window.innerWidth > 960) {
			if (rect.top - window.innerHeight <= 10 && rect.top - window.innerHeight > -259) {
				console.log(rect.top - window.innerHeight);
				bodyClass = 'section1';
				flip.innerText = 'Percussionist';
			} else if (rect.top - window.innerHeight < -260) {
				// bodyClass = 'section2';
				flip.innerText = 'Educator';
			} else {
				bodyClass = 'section3';
				flip.innerText = 'Drummer\n Percussionist\n Educator';
				flip.style.color = '#75accb';
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
			<h1 className="pro" id="fl" ref={imageRef}>
				Francesco Lomagsitro
			</h1>
			<p className="info-text">
				Francesco Lomagistro, began piano studies at age of 11 and later switched to drums. He received his
				music education through private lessons and attendance at seminars by great musical Masters. He received
				his Degree in ‘Percussion Instruments’ at the “Niccolo Piccinni” Music Conservatory in Bari, Italy and
				the Degree in “Didactis for Musical Instruments ” He teaches “Drums and Percussions” at Liceo Musicale
				in Italy and make clinics over all the Country.
			</p>
			<p className="info-text">
				He leads the group Berardi Jazz Connection, a European jazz project whose release 4 cd well known around
				the world, Japan ahead, and Usa and North Europe, and since 2016 he formed a new trio project the
				T-Riot, with which he released the first cd "A different truth" for the japanese label Albòre Jazz,
				conquering new fans in Japan, North Europe, South Africa and Usa; the cd has been in some jazz top
				charts, and on May 2018 they made a tour in Asia , playing in theatres and venues in Bangkok and Honk
				Kong.
			</p>
			<p className="info-text">
				His versatility has afforded him experience in different musical ambients collaborating with a lot of
				different artists; some of his compositions have been included in many compilations around the world and
				have been featured in the top jazz charts.
			</p>
			<p className="info-text">
				He has participated in different recording sessions for different labels such as Virgin, Universal,
				Hobo-Sony, Edel, Storie di Note, Irma Records, Antibemusic, Family Affairs, Flaminio Jazz, P-Vine
				records, Four, Caffè Concerto, Dodicilune, Self, Jazz Engine/Auand.
			</p>
			<p className="info-text">
				He performed in different venues as theatres, clubs and festivals in Europe, USA and Asia. He is
				international endorser with Paiste and Vic Firth.
			</p>
			<h1 className="pro" id="triot" ref={imageRef}>
				Info Lesson
			</h1>
			<img src={fl1} alt="T-riot on stage" />
			<p className="info-text">
				A rock-solid trio session, with a top-shelf Italian groove pedigree as the group features two members
				from Berardi Jazz Connection, and the pianist from Quintetto X! You might remember those two groups from
				their more club jazz-oriented projects from the previous decade or two,but this time around, all three
				musicians are in a straighter jazz vein, yet still one that's filled with plenty of rhythm! The piano,
				bass and drums come together fantastically here with Pietro Vincenti on acoustic keys, Camillo Pace on
				bass, and Francesco Lomagistro on drums.
			</p>
			<h1 className="pro" id="bjc" ref={imageRef}>
				Educator
			</h1>
			<img src={fl2} alt="Berardi Jazz Connection band" />
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

export default FL_Sidebar_Info;
