import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Img/sliderimg.png';
import img2 from '../Img/sliderimg1.png';
import img3 from '../Img/sliderimg2.png';
import img4 from '../Img/sliderimg3.png';
import './CSS/Slider.css'
function Show() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0 // optional, default to 1.
    }
  };
  return (
    <>

      <section className='pt-4 pb-5'>
        <div className="container-fluid max90">
          <div className="carouselBox">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              itemClassNamclassName="carousel-item-padding-40-px"
            >
              <div className="imageBox">
                <div className='slider-img'>
                <img src={img1} alt="" />
                </div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img1} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img3} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img4} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img1} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img1} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img3} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img4} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
              <div className="imageBox">
                <div className='slider-img'><img src={img2} alt="" /></div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Show