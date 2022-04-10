import React from 'react'
import './secondaryStyles.css'

function Comic(props) {
  return (
    <div className="comicCard">
        <img class="sideImage" src={props.cover} alt={props.name} />
        <div class="cardTextDiv">
          <h4 class="name" className="cardTitle">{props.name}</h4>
          <h5 class="series" className="cardTitle">{props.series}</h5>
          <h6 class="info" className="cardTitle">{props.info}</h6>
          <h6 class="price" className="cardTitle">{props.price}</h6>
        </div>
    </div>
  )
}

export default Comic