import React from 'react';


const VideoFrame = (props) => {
	return (
		<div className="video-sidebar-bg" onClick={props.onVideoChange}>
			
			<div className='video-iframe' >{props.children}</div>
			<div className="video-text">
				<h4>{props.videotitle}</h4>
				<p>{props.videoauthor}</p>
			</div>
		</div>
	);
};

export default VideoFrame;
