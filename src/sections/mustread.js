import React from 'react'
import converter from 'number-to-words';
//use when converting the number to the words for the day
import json from '../mustreads.json'

function Mustread() {
    const date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let comic;
    let comic2;


    if (day % 1 != 0) {
      comic = json.comics.one;
      comic2 = json.comics.two;
    } else {
      comic = json.comics.three;
      comic2 = json.comics.four;
    }

    /*
    comic = marvel[converter.toWords(day)];
    comic2 = marvel[day + 28].toUpperCase().split("");
    */

  return (
    <div className="comicContainer">
      <a target="_blank" class="recTextDecoration" href={comic.link}>
        <div className="mustReadComicCard">
            <img className="sideImage" src={comic.cover} alt={comic.name} />
            <div className="cardTextDiv">
              <h3 className="name" className="cardTitle">{comic.name}</h3>
              <h4 className="info" className="cardTitle">{comic.info}</h4>
            </div>
        </div>
      </a>
      <a target="_blank" class="recTextDecoration" href={comic2.link}>
        <div className="mustReadComicCard">
            <img className="sideImage" src={comic2.cover} alt={comic2.name} />
            <div className="cardTextDiv">
              <h3 className="name" className="cardTitle">{comic2.name}</h3>
              <h4 className="info" className="cardTitle">{comic2.info}</h4>
            </div>
        </div>
      </a>
    </div>

  )
}

export default Mustread