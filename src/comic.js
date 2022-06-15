import React from 'react'
import './secondaryStyles.css'

function Comic(props) {
  return (
    <div className="comicCard">
        <img className="sideImage" src={props.cover} alt={props.name} />
        <div className="cardTextDiv">
          <h4 className="name" className="cardTitle">{props.name}</h4>
          <h5 className="series" className="cardTitle">{props.series}</h5>
          <h6 className="info" className="cardTitle">{props.info}</h6>
          <h6 className="price" className="cardTitle">{props.price}</h6>
        </div>
    </div>
  )
}

export default Comic