import React from 'react';
import AlbumCover from '../../images/berardi_jazz.jpg';

const MusicList = () => {
	return (
		<div className="video-background">
			<img src={AlbumCover} alt="album cover" />
			<h3>Album name</h3>
			<p>Artist</p>
		</div>
	);
};

export default MusicList;
