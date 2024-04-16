import React from 'react'
import pro from '../Img/vectorPro.png';


const Cards = () => {
  return (
    <div className="topcontent">
          <h6 className="Popular">
            <img src={pro} className="service-img" alt="Popular" />
            Popular Menu
          </h6>
          <h2 className="pop-menu">
            Our Popular Delicious <span className="red">FOOD</span>
          </h2>
          </div>
  )
}

export default Cards