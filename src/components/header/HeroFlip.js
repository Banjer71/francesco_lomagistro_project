import React from 'react';

const HeroFlip = (props) => {
	return (
		<h2 className="hero-flip projects">
			{props.text1}
			<br />
			{props.text2}
			<br />
			{props.text3}
		</h2>
	);
};

export default HeroFlip;
