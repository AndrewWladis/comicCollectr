import React from 'react'
import Comic from '../comic'
import json from '../comics.json'
//import getPrice from './getPrice'

function Thor() {
  return (
    <div id="thor" className="comicContainer">
      <Comic name={json.comics.incredibleHulk93.name} 
      cover={json.comics.incredibleHulk93.cover} 
      info={json.comics.incredibleHulk93.info} 
      //price={getPrice('Incredible Hulk', '93')} 
      series={json.comics.incredibleHulk93.series}/>
      {/* Incredible Hulk 93 */}
    </div>
  )
}

export default Thor