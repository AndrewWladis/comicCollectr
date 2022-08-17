import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from '../getPrice'

function Cap4() {
  return (
    <div id="cap4" className="comicContainer">
        <Comic name={json.comics.captainAmerica25.name} 
        cover={json.comics.captainAmerica25.cover} 
        info={json.comics.captainAmerica25.info} 
        //price={getPrice(json.comics.captainAmerica25.series, '25')} 
        series={json.comics.captainAmerica25.series}/>
        {/* Captain America 25 */}

        <Comic name={json.comics.captainAmericaSamWilson3.name} 
        cover={json.comics.captainAmericaSamWilson3.cover} 
        info={json.comics.captainAmericaSamWilson3.info} 
        //price={getPrice(json.comics.captainAmericaSamWilson3.series, '1')} 
        series={json.comics.captainAmericaSamWilson3.series}/>
        {/* Captain America Sam Wilson 3 */}
    </div>
  )
}

export default Cap4