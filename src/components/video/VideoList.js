import React from 'react';
import VideoFrame from './VideoFrame';
import './videolist.css';
import Iframe from './Iframe';
import Thumbnail from '../../images/thumb.jpg';
import Thumbnail_03 from '../../images/video_3.jpg';
import Thumbnail_02 from '../../images/thumb_paiste.jpg';
import Thumbnail_04 from '../../images/thumb_triot.jpg';
import Thumbnail_05 from '../../images/video_05.jpg';

const VideoList = (props) => {
	const renderVideo = (e) => {
		props.onVideoSelect(e);
	};

	const handleScroll = () => {
		let bodyClass = 'section1';
		if (window.innerWidth > 960) {
			document.body.className = bodyClass;
		}
	};

	handleScroll();

	return (
		<div className="video" id="videos">
			<div className="media-video">
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/UhtpNjlIWjw')}
					videotitle="Paiste video demostration"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						id="test01"
						width="160"
						height="100"
						link={Thumbnail}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/0rOF_LpMwaY')}
					videotitle="Paiste Cymbals - Francesco Lomagistro (Studio Session)"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="160"
						height="100"
						link={Thumbnail_02}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/-PhldhdxPZc')}
					videotitle="Paiste Artist Francesco Lomagistro - Drum Solo"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="160"
						height="100"
						link={Thumbnail_03}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/5kFfRUHec7U')}
					videotitle="Teaser T-Riot Lomagistro/Pace/Vincenti"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="160"
						height="100"
						link={Thumbnail_04}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						fullscreen="allowFullscreen"
					/>
				</VideoFrame>
				<VideoFrame
					onVideoChange={(e) => renderVideo('https://www.youtube.com/embed/aFhoNU29_bg')}
					videotitle="Teaser T-Riot Lomagistro/Pace/Vincenti"
					videoauthor="Francesco Lomagistro"
				>
					<Iframe
						width="160"
						height="100"
						link={Thumbnail_05}
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
