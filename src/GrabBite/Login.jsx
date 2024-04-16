import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import Footer from './Footer'
import Header from './Header';
import { Helmet } from 'react-helmet';
const Login = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="This is my home page" />
                <title>Login Page</title>
            </Helmet>
            <Header />
            <section className="login-section p-5">
                <div className="container">
                    <div className="login-form form-container">
                        <h2 className='text-center login-heading'>LOGIN FORM</h2>
                        <form action="">
                            <label for="">Email:</label>
                            <input type="email" name="" id="" placeholder="Enter Your Email:" />
                            <label for="">Password:</label>
                            <input type="password" name="" id="" placeholder="Enter Your Password:" />
                            <a href="" className="forgot">Forgot Password ?</a>
                            <input type="submit" value="Login" />
                            <ul className="d-flex justify-content-between">
                                <li>Don’t have an account ?</li>
                                <li className='text-primary'>sign up using</li>
                            </ul>
                            <div className="social-icons">
                                <ul className="d-flex">
                                    <li><FaFacebook /></li>
                                    <li className='second'><FaInstagram /></li>
                                    <li className='third'><FaTwitter /></li>
                                    <li className='fourth'><FaGoogle /></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login