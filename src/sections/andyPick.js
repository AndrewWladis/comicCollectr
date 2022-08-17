import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function AndysPicks() {
  return (
    <div id="andysPicks" className="comicContainer">
        <Comic name={json.comics.infiniteCrisis5.name} 
        cover={json.comics.infiniteCrisis5.cover} 
        info={json.comics.infiniteCrisis5.info} 
        //price={getPrice(json.comics.infiniteCrisis5.series, '359')} 
        series={json.comics.infiniteCrisis5.series}/>
        {/* Infinite Crisis 5 */}

        <Comic name={json.comics.incredibleHulk449.name} 
        cover={json.comics.incredibleHulk449.cover} 
        info={json.comics.incredibleHulk449.info} 
        //price={getPrice(json.comics.incredibleHulk449.series, '359')} 
        series={json.comics.incredibleHulk449.series}/>
        {/* Incredible Hulk 449 */}

        <Comic name={json.comics.batman133.name} 
        cover={json.comics.batman133.cover} 
        info={json.comics.batman133.info} 
        //price={getPrice(json.comics.batman133.series, '133')} 
        series={json.comics.batman133.series}/>
        {/* Batman 133 */}

        <Comic name={json.comics.flash141.name} 
        cover={json.comics.flash141.cover} 
        info={json.comics.flash141.info} 
        //price={getPrice(json.comics.flash141.series, '141')} 
        series={json.comics.flash141.series}/>
        {/* Flash 141 */}
    </div>
  )
}

export default AndysPicks