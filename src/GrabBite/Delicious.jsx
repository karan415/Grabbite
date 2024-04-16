import React from 'react'
import './CSS/Order.css'
const Delicious = () => {
  return (
    <>
    <section className="custom-section p-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 discount ">
                  <div className="del-content">
                    <div className="contentss">
                    <h4 className="off">-50% Off Now! Discount For DeliciousTasty Burgers!</h4>
                    <h6 className="sale-off">Sale off <span className="salee"><br/>50% only this week</span></h6>
                    <a href="#" className="order">ORDER NOW</a>
                  </div>
                  </div>

                </div>
                <div className="col-lg-8 ">
                    <div className="row md-gap sm-gap">
                        <div className="col col-sm-6 col-xs-6 md pe-0">
                            <div className="del-content-1">
                                <div className="contents">
                                <h6 className="sale-off">Delicious Pizza <span className="salee"><br/>50% off Now</span></h6>
                                <a href="#" className="order">ORDER NOW</a>
                            </div>
                              </div>
                        </div>
                        <div className="col col-sm-6 col-xs-6 ps-0 md ">
                            <div className="del-content-2">
                                <div className="contents">
                                <h6 className="sale-off">American Burgers <span className="salee"><br/>50% off Now</span></h6>
                                <a href="#" className="order">ORDER NOW</a>
                            </div>
                              </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-xs-12 p-2 py-0">
                        <div className="del-content-end mt-4">
                            <div className="contentsz">
                            <h4 className="off">Tasty Buzzed Pizza</h4>
                            <h6 className="sale-off">Sale off <span className="salee"><br/>50% only this week</span></h6>
                            <a href="#" className="order">ORDER NOW</a>
                        </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Delicious