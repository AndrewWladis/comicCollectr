import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function Guardians3() {
  return (
    <div id="Guardians3" className="comicContainer">
        <Comic name={json.comics.thor166.name} 
        cover={json.comics.thor166.cover} 
        info={json.comics.thor166.info} 
        //price={getPrice(json.comics.thor166.series, '1')} 
        series={json.comics.thor166.series}/>
        {/* Thor 166 */}

        <Comic name={json.comics.thor133.name} 
        cover={json.comics.thor133.cover} 
        info={json.comics.thor133.info} 
        //price={getPrice(json.comics.thor133.series, '1')} 
        series={json.comics.thor133.series}/>
        {/* Thor 133 */}
    </div>
  )
}

export default Guardians3