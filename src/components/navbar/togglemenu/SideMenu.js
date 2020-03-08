import React from 'react'
import './sidemenu.css'

const menuToggleButton = ({click}) => {
    return ( 
        <button className='toggle-button' onClick={click}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
     );
}
 
export default menuToggleButton;