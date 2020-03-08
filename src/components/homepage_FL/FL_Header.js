import React from 'react';
import HeaderImageSection from '../header/HeaderImageSection'
import HeroFlip from '../header/HeroFlip'

const FL_Header = () => {
	return (
		<div className="header-class">
			<HeaderImageSection id="bg-image" />
			<HeaderImageSection id="fl-1" />
			<HeaderImageSection id="fl-2" />
			<div className="header-logo">
				<HeroFlip
					text1='Drummer'
					text2='Percussionist'
					text3='Educator'
				/>
			</div>
		</div>
	);
};

export default FL_Header;
