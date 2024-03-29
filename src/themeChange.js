import React from 'react'
import moonknightPic from './icons/moonknight.jpg'
import * as ReactDOM from 'react-dom';
import themes from './themes.json'
import batman from './icons/batman.jpg'

function themeChange() {
        if (document.readyState === 'complete') {
                console.log("it's working!")

                //function to change theme
                function change(i, image) {
                        document.getElementById('navIcon').src = image;
                        document.getElementById('navIcon').alt = i.name;
                        document.querySelector(':root').style.setProperty('--cardtext', i.text);
                        document.querySelector(':root').style.setProperty('--cardcolor', i.card);
                        document.querySelector(':root').style.setProperty('--navcolor', i.header);
                        document.querySelector(':root').style.setProperty('--sectionheader', i.header);
                        document.body.style.color = i.body;
                        //document.querySelector('.cardTitle').style.color
                        document.getElementById('NavBar').style.backgroundColor = i.nav;
                        document.body.style.backgroundColor = i.body;
                        console.log('function to change theme works')
                        document.getElementById('logoText').style.color = i.header;

                        document.body.style.animation = 'moonKnightFlash 0.75s';
                }
                
                var bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

                console.log(bodyBackgroundColor)
                //checks theme and changes it 
                if (bodyBackgroundColor == 'rgb(22, 22, 22)') {
                        change(themes.theme.moonknight, moonknightPic)
                        console.log('function to change theme works')
                } else {
                        change(themes.theme.batman, batman) 
                }
        }
}

export default themeChange