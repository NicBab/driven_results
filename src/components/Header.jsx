import React from 'react'
import driven_logo1 from '../images/driven_logo1.png'
import './css/Header.css'

const Header = () => {
    return (
      <>
        <div id="header">
            <img src={driven_logo1} alt="driven_logo" className="logo" />
        </div>
      </>
    )
}

export default Header