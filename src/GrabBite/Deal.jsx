
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../Img/dealslider.png'
import img1 from '../Img/dealslider2.png'
import pro from '../Img/vectorPro.png';
import './CSS/Slider.css'
const Deal = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <section className="deal-section p-5">
                <div className="container text-center">
                    <h6 className="Popular"><img src={pro} className='service-img' alt='' />Today’s Deal</h6>
                    <h2 className="deal-day">Deal Of The <span className='done'>DAY</span></h2>
                    <div className="positions">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            infinite={true}
                            itemClassName="carousel-item-padding-40-px"
                        >

                            <div className="carouselBox1">
                                <div className="custom-bg">
                                    <img src={img} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>
                            <div className="carouselBox1">
                                <div className="custom-bg-deal">
                                    <img src={img1} alt="" />

                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Deal