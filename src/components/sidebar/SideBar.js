import React from 'react';
import PrimarySection from './PrimarySection';


const SideBar = (props) => {

	return (
		<div className="side-bar">
			<PrimarySection>
				{props.children}
			</PrimarySection>
		</div>
	);
};

export default SideBar;
