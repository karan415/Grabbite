import React, { useState } from 'react'
import { FaCartPlus, FaUser } from 'react-icons/fa6'
import Navbar from '../GrabBite/Navbar'
import { Link } from 'react-router-dom'
import logo from '../Img/grabbite_logo.png'
import { FaSearch } from 'react-icons/fa'
import { useCart } from '../CartContext';
import icon from '../Img/toggle-btns.webp'
const Nav = () => {
    const { cartLength } = useCart();
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <header className='bottom-header'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 sm-3 d-flex logonav align-items-center ">
                            <div className="logo_box onlyDesktop">
                                <img src={logo} alt="" />
                            </div>
                            <div className="onlyMobile">
                                <div className="toogle_box nav-open" onClick={handleClick}>
                                    <img src={icon} alt="" />
                                    <h3>G</h3>
                                </div>
                                {toggle ? (
                                    <div className="toggle_menu">
                                        <Navbar />
                                    </div>
                                ) : null}
                            </div>
                            <div className="navitem onlyDesktop">
                            <Navbar />
                            </div>
                           
                        </div>
                        <div className="col-md-4 sm-6">
                            <div className="search_box">
                                <input type="search" name="" id="" placeholder='Search Here.....' />
                                <label htmlFor="" className='onlyMobile'><FaSearch /></label>
                                <button className="btn btn-primary onlyDesktop">search</button>
                            </div>
                        </div>
                        <div className="col-md-3 sm-3 logonav icons">
                        <ul className='onlyMobile'> <li> <Link to='/cart'><FaCartPlus /> <span>{cartLength}</span></Link></li>
                        <li><Link to='/login'><FaUser /></Link></li></ul>
                            <ul className='onlyDesktop'>
                                <li> <Link to='/cart'><FaCartPlus /> <span>{cartLength}</span></Link></li>
                                <li><Link to='/login'><FaUser /></Link></li>
                                <li><Link to='/register' className='onlyDesktop'>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav
