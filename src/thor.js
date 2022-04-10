import React from 'react'
import Comic from './comic'
import json from './comics.json'
//import getPrice from './getPrice'

function Thor() {
  return (
    <div id="thor" className="comicContainer">
        <Comic name={json.comics.thorAnnual11.name} 
        cover={json.comics.thorAnnual11.cover} 
        info={json.comics.thorAnnual11.info} 
        //price={getPrice('Thor Annual', '11')} 
        series={json.comics.thorAnnual11.series}/>
        {/* Thor Annual 11 */}

        <Comic name={json.comics.incredibleHulk93.name} 
        cover={json.comics.incredibleHulk93.cover} 
        info={json.comics.incredibleHulk93.info} 
        //price={getPrice('Incredible Hulk', '93')} 
        series={json.comics.incredibleHulk93.series}/>
        {/* Incredible Hulk 93 */}

        <Comic name={json.comics.thor2.name} 
        cover={json.comics.thor2.cover} 
        info={json.comics.thor2.info} 
        //price={getPrice('Thor', '2')} 
        series={json.comics.thor2.series}/>
        {/* Thor 2 */}
    </div>
  )
}

export default Thor