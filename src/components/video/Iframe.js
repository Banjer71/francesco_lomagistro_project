import React from 'react';

const Iframe = (props) => {
	return (
		<iframe
			width={props.width}
			height={props.height}
			src={props.link}
			frameBorder={props.frameBorder}
			allow={props.allow}
			allowFullScreen={props.fullscreen}
		/>
	);
};

export default Iframe;
