import React from 'react'
import './secondaryStyles.css'
import batman from './icons/batman.jpg'
import themeChange from './themeChange'

function Nav() {
  return (
    <div id='NavBar'>
        <h2 className="logoText">Comic Collector</h2>
        <a className="navText" href="#andysPicks">
          <h3>Andy's Picks</h3> 
        </a>
        <img id="navIcon" src={batman} alt="batman" onClick={themeChange} />
    </div>
  )
}

export default Nav