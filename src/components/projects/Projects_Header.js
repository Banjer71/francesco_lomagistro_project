import React from 'react';
import HeaderImageSection from '../header/HeaderImageSection';
import HeroFlip from '../header/HeroFlip'

const Projects_Header = () => {
	return (
		<div className="header-class image">
				<HeaderImageSection id="triot-bg" />
				<HeaderImageSection id="triot-bg-2" />
				<HeaderImageSection id="triot-bg-3" />
                <div className="header-logo">
                    <HeroFlip 
                        text1='T-RIOT'
                    />
                </div>
		</div>
	);
};

export default Projects_Header;
