import React from 'react'
import Comic from './comic'
import json from './comics.json'
//import getPrice from './getPrice'

function AndysPicks() {
  return (
    <div id="andysPicks" className="comicContainer">
        <Comic name={json.comics.detectivecomics359.name} 
        cover={json.comics.detectivecomics359.cover} 
        info={json.comics.detectivecomics359.info} 
        //price={getPrice('Detective Comics', '359')} 
        series={json.comics.detectivecomics359.series}/>
        {/* Detective Comics 359 */}

        <Comic name={json.comics.flash141.name} 
        cover={json.comics.flash141.cover} 
        info={json.comics.flash141.info} 
        //price={getPrice('flash', '141')} 
        series={json.comics.flash141.series}/>
        {/* Flash 141 */}

        <Comic name={json.comics.batman133.name} 
        cover={json.comics.batman133.cover} 
        info={json.comics.batman133.info} 
        //price={getPrice('batman', '133')} 
        series={json.comics.batman133.series}/>
        {/* Batman 133 */}

        <Comic name={json.comics.superiorIronMan1.name} 
        cover={json.comics.superiorIronMan1.cover} 
        info={json.comics.superiorIronMan1.info} 
        //price={getPrice('superior iron man', '1')} 
        series={json.comics.superiorIronMan1.series}/>
        {/* Superior Iron Man 1 */}
    </div>
  )
}

export default AndysPicks