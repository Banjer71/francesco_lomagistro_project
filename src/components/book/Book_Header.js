import React from 'react';
import HeaderImageSection from '../header/HeaderImageSection';
// import HeroFlip from '../header/HeroFlip'

const Book_Header = () => {
	return (
		<div className="header-class book">
				<HeaderImageSection id="book-bg" />
                <div className="header-logo">
                    {/* <HeroFlip 
                        text1='Book'
                    /> */}
                </div>
		</div>
	);
};

export default Book_Header;