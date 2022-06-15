import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function Morb() {
  return (
    <div id="morb" className="comicContainer">
        <Comic name={json.comics.amazingSpiderman102.name} 
        cover={json.comics.amazingSpiderman102.cover} 
        info={json.comics.amazingSpiderman102.info} 
        //price={getPrice(json.comics.amazingSpiderman102.series, '1')} 
        series={json.comics.amazingSpiderman102.series}/>
        {/* Amazing Spider-Man 102 */}

        <Comic name={json.comics.morbius1.name} 
        cover={json.comics.morbius1.cover} 
        info={json.comics.morbius1.info} 
        //price={getPrice(json.comics.morbius1.series, '1')} 
        series={json.comics.morbius1.series}/>
        {/* Morbius 1 */}
    </div>
  )
}

export default Morb