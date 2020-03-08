import React from 'react';
import Iframe from './Iframe'

import './videoselected.css';

const VideoSelected = (props) => {
	console.log(props.selectedVideoUrl)

	return (
		<div className="header-class-video-selected">
			<div className="video-selected">
				<div className="iframe-container">
					{props.selectedVideoUrl ? (
						<Iframe
							width="1000"
							height="500"
							link={props.selectedVideoUrl}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							fullscreen="allowFullscreen"
						/>
					) : (
						<Iframe
							width="1000"
							height="500"
							link="https://www.youtube.com/embed/UhtpNjlIWjw"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							fullscreen="allowFullscreen"
						/>
					)
					}
				</div>
				{/* <div className="videoselected-title">autor{props.videotitle}</div>
				<div className="videoselected-author">{props.videoauthor}</div> */}
			</div>
		</div>
	);
};

export default VideoSelected;
