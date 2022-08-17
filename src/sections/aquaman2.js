import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function Aquaman2() {
  return (
    <div id="aquaman2" className="comicContainer">
        <Comic name={json.comics.aquaman3.name} 
        cover={json.comics.aquaman3.cover} 
        info={json.comics.aquaman3.info} 
        //price={getPrice(json.comics.aquaman3.series, '1')} 
        series={json.comics.aquaman3.series}/>
        {/* Aquaman 3 */}

        <Comic name={json.comics.aquaman1.name} 
        cover={json.comics.aquaman1.cover} 
        info={json.comics.aquaman1.info} 
        //price={getPrice(json.comics.aquaman1.series, '1')} 
        series={json.comics.aquaman1.series}/>
        {/* Aquaman 1 */}

        <Comic name={json.comics.aquaman2.name} 
        cover={json.comics.aquaman2.cover} 
        info={json.comics.aquaman2.info} 
        //price={getPrice(json.comics.aquaman2.series, '1')} 
        series={json.comics.aquaman2.series}/>
        {/* Aquaman 2 */}
    </div>
  )
}

export default Aquaman2