import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import './Carousel.css'


import { images } from '../Helpers/CarouselData'

function Carousel() {

   const [carImage, setCarImage] = useState(0)

   return (
      <div className="carousel">

         <div className="__images" style={{ backgroundImage: `url(${images[carImage].img})` }}>

            <div className="__left" onClick={() => { carImage > 0 && setCarImage (carImage - 1) }}>
               <BiLeftArrow />
            </div>

            <div className="content">
               <h1 className="__title">{images[carImage].title}</h1>
               <p className="__desc">{images[carImage].desc}</p>
            </div>

            <div className="__right" onClick={() => { carImage < images.length - 1 && setCarImage (carImage + 1) }}>
               <BiRightArrow />
            </div>

         </div>

      </div>
   )
}

export default Carousel