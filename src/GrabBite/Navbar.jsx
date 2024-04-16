import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className=" ">
                <li className="nav-item">
                <Link to='/'>HOME</Link>
                </li>
                <li className="nav-item">
              <Link to='/about'> About</Link> 
                </li>
                <li className="nav-item">
                    <Link to='/Shop'>SHOP</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact'>CONTACT US</Link>  
                </li>
            </ul>
        </>
    )
}

export default Navbar