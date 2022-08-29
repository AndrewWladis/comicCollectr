import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from '../getPrice'

function AndysPicks() {
  return (
    <div id="andysPicks" className="comicContainer">
        <Comic name={json.comics.infiniteCrisis5.name} 
        cover={json.comics.infiniteCrisis5.cover} 
        info={json.comics.infiniteCrisis5.info} 
        //price={getPrice(json.comics.infiniteCrisis5.series, '359')} 
        series={json.comics.infiniteCrisis5.series}/>
        {/* Infinite Crisis 5 */}

        <Comic name={json.comics.thor166.name} 
        cover={json.comics.thor166.cover} 
        info={json.comics.thor166.info} 
        //price={getPrice(json.comics.thor166.series, '1')} 
        series={json.comics.thor166.series}/>
        {/* Thor 166 */}

        <Comic name={json.comics.incredibleHulk449.name} 
        cover={json.comics.incredibleHulk449.cover} 
        info={json.comics.incredibleHulk449.info} 
        //price={getPrice(json.comics.incredibleHulk449.series, '359')} 
        series={json.comics.incredibleHulk449.series}/>
        {/* Incredible Hulk 449 */}
    </div>
  )
}

export default AndysPicks