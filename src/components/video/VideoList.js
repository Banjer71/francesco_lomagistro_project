import React from 'react'
import VideoFrame from './VideoFrame';
import './videolist.css';
import Iframe from './Iframe';

const VideoList = (props) => {
	const renderVideo = (e) => {
		props.onVideoSelect(e);
	};

	return (
		<div className="video">
			<div className="media-video">
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/UhtpNjlIWjw')}
					videotitle="Paiste video demostration"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						id="test01"
						width="150"
						height="90"
						link="https://i1.ytimg.com/vi/UhtpNjlIWjw/default.jpg"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/J6UO5WENBD4')}
					videotitle="Mino..il piccolo Golia"
					videoauthor="Davide Naccarati"
				>
					<Iframe
						width="150"
						height="90"
						link="https://www.youtube.com/embed/J6UO5WENBD4"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/EETRmXT9OIg')}
					videotitle="Paiste Artist Francesco Lomagistro - Drum Solo"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="150"
						height="90"
						link="https://www.youtube.com/embed/EETRmXT9OIg"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/-PhldhdxPZc')}
					videotitle="Francesco Lomagistro, Drum Solo"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="150"
						height="90"
						link="https://www.youtube.com/embed/-PhldhdxPZc"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/0rOF_LpMwaY')}
					videotitle="Paiste Cymbals - Francesco Lomagistro"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="150"
						height="90"
						link="https://www.youtube.com/embed/0rOF_LpMwaY"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
			</div>
		</div>
	);
};

export default VideoList;
