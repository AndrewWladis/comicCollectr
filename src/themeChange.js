import React from 'react'
import thorPic from './icons/thor4.jpg'

function themeChange() {
    if (document.getElementById('NavBar').style.backgroundColor != '#240202') {
        document.getElementById('navIcon').src = thorPic;
        document.querySelector(':root').style.setProperty('--cardtext', '#578aeb')
        document.querySelector(':root').style.setProperty('--navcolor', '#3e7cf0')
        document.getElementById('NavBar').style.backgroundColor = '#240202';
        document.body.style.backgroundColor = '#4a0505';
    }
}

export default themeChange