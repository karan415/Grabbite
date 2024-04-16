import React, {  useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { Helmet } from 'react-helmet';
const Register = () => {
    const [user, setUser] = useState({
        function:'registerUser',
        username: "",
        email: "",
        password: "",
        c_pass: "",
        error: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response =await axios.post('https://webstepsolutions.com/grabAPi/functions.php', user);
            setUser({ ...user, response: response.data });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setUser({ ...user, response: "Error" });
        }
        console.log(user);
    }

    return (
        <>
        <Helmet>
        <meta name="description" content="This is my home page" />
        <title>Register Page</title>
        </Helmet>
            <Header />
            <section className="register-section p-5">
                <div className="container">
                    <div className="register-form login-form">
                        <h2>Register Form</h2>
                        <form onSubmit={handleSubmit} id="form">
                            <input
                                type="text"
                                name="username"
                                id="text"
                                placeholder="Enter Your Name"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Your Email"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Your Password"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="c_pass"
                                id="c_pass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                            <ul className="d-flex">
                                <li>
                                    <input type="checkbox" name="" id="" />
                                </li>
                                <li>yes, I accept all terms & conditions</li>
                            </ul>
                            <input type="submit" className="register-btn" value="Register Now" />
                            <ul className="d-flex register-menu">
                                <li className="fisrt-li w-75 text-end">Already have an account?</li>
                                <li className="text-primary w-25 text-end">Login now</li>
                            </ul>
                        </form>
                       
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Register;
