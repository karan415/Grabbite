import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CSS/Banner.css'
import vector from '../Img/BannerVector.png'
import vector2 from '../Img/bannerFoodImg.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
const Banner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  return (
    <>
      <section className="grabbite_banner">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-8 banner_bg d-flex ">
              <div className="banner_content">
                <h1>eat the best</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo autem cumque.</h5>
                <div className="col relative">
                <label htmlFor=""><FaMapMarkerAlt /></label>
                <input type="text" name="" id="" placeholder=' pickup location' className='w-100' /></div>
                <select name="" id="" className='w-100'>

                  <option value=""> Restorants</option>
                  <option value="">Resto122</option>
                  <option value="">Resto1</option>
                  <option value="">Restorant</option>
                </select>
                <div className="onlyDesktop">
                <button className="btn search_btns">submit</button>
                <span>or</span>
                <button className="btn search_btns">search for Restaurants</button>
                </div>
               <div className="onlyMobile">
               <button className="btn search_btns"> Restaurants</button>
               </div>

                <div className="food_image">
                  <img src={vector2} alt="" />
                </div>
              </div>

            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="vector_img">
                <img src={vector} alt="" />

              </div>
            </div>
          </div>
          <div className="deliver anything">
          <h4 className='text-center'>Deliver Anything</h4>
          <div className="delivery_form">
            <form action="">
              <div className="d-flex justify-content-between align-items-center form-content">
              <div className="col relative">
              <label htmlFor=""><FaMapMarkerAlt /></label>
              <input type="text" name="" id="" placeholder=' pickup location' /></div>
              <div className="col relative">
              <label htmlFor=""><FaMapMarkerAlt /></label>
                <input type="text" name="" id="" placeholder=' drop location' />
                </div>
                <div className="col relative">
                <label htmlFor=""><MdDateRange /></label>
                <DatePicker
                  id="datepickertime"
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Preferred Date"
                />
              </div>
              <div className="col relative">
                <label htmlFor=""><MdDateRange /></label>
                <DatePicker
                  id="datepicker"
                  selected={selectedTime}
                  onChange={time => setSelectedTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Preferred Time"
                />
              </div>
                <div className="col relative">
              <label htmlFor=""><FaWeight /></label>
                <select name="" id="">
                  <option value="">Estimated weight</option>
                  <option value="">value1</option>
                  <option value="">value1</option>
                </select>
                </div>
                <div className="col relative">
                <button className="btn search_btns">submit</button>
                </div>
              </div>
            </form>
          </div>

        </div>
        </div>
        
      </section>
    </>
  )
}

export default Banner