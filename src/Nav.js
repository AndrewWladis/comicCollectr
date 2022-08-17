import React from 'react'
import './secondaryStyles.css'
import batman from './icons/batman.jpg'
import theme from './themes.json'
import themeChange from './themeChange'

function Nav() {
  return (
    <div id='NavBar'>
        <h2 id="logoText">Ducky Comics</h2>
        <a className="navText" href="#andysPicks">
          <h3>Andy's Picks</h3> 
        </a>
        <img onClick={themeChange} id="navIcon" src={batman} alt="batman"/>
    </div>
  )
}

export default Nav