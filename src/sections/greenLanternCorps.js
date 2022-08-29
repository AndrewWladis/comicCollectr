import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function GreenLanternCorps() {
  return (
    <div id="GreenLanternCorps" className="comicContainer">
        <Comic name={json.comics.greenLantern59.name} 
        cover={json.comics.greenLantern59.cover} 
        info={json.comics.greenLantern59.info} 
        //price={getPrice(json.comics.greenLantern59.series, '359')} 
        series={json.comics.greenLantern59.series}/>
        {/* Green Lantern 59 */}

        <Comic name={json.comics.greenLantern201.name} 
        cover={json.comics.greenLantern201.cover} 
        info={json.comics.greenLantern201.info} 
        //price={getPrice(json.comics.greenLantern201.series, '359')} 
        series={json.comics.greenLantern201.series}/>
        {/* Green Lantern 201 */}
    </div>
  )
}

export default GreenLanternCorps