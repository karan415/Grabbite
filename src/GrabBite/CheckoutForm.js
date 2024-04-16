import React, { useState } from 'react';
import Cities from './PunjabCities';

const CheckoutForm = () => {
    const [input, setInput] = useState({
        fName: "",
        lName: "",
        email: "",
        town: "",
        state: "Punjab",
        number: "",
        address: "",
        company: "",
        pincode: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true;
        if (!input.fName) {
            formIsValid = false;
            errors["fName"] = "this is required";
        }
        if (!input.email) {
            formIsValid = false;
            errors["email"] = "this is required";
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            formIsValid = false;
            errors["email"] = "this is required.";
        }

        if (!input.town) {
            formIsValid = false;
            errors["town"] = "this is required.";
        }
        if (!input.number) {
            formIsValid = false;
            errors["number"] = "this is required.";
        }
        if (!input.address) {
            formIsValid = false;
            errors["address"] = "this is required.";
        }
        if (!input.pincode) {
            formIsValid = false;
            errors["pincode"] = "this is required.";
        }

        setErrors(errors);

        // If form is valid, proceed with submission
        if (formIsValid) {
            console.log("Form submitted successfully!");
            setErrors({});
            setInput({
                fName: "",
                lName: "",
                email: "",
                town: "",
                state: "Punjab",
                number: "",
                address: "",
                company: "",
                pincode: "",
            });
        }
    };
    return (
        <>
            <div className="details">
                <form action="" onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-lg-6">
                            <div classNameName='boxx'>
                                <label htmlFor="">first name:</label>
                                <input type="text" name="fName" onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors["fName"]}</span>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div classNameName='boxx'>
                                <label htmlFor="">Last name:</label>
                                <input type="text" name="lName" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div classNameName='boxx'>
                                <label htmlFor="">email address:</label>
                                <input type="email" name="email" onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors["email"]}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div classNameName='boxx'>
                                <label htmlFor="">state:</label>
                                <input type="text" name="state" value={input.state} onChange={handleChange} />

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div classNameName='boxx'>
                                <label htmlFor="">town/city:</label>
                                   <select name="" id="" value={input.state.value} onChange={handleChange}>
                                   {
                                    Cities.map((elm,index)=>{
                                        return(
                                            <>
                                            <option value="" id={elm.id} key={index}>{elm.cityName}</option>
                                            </>
                                        )
                                    })
                                   }
                                   <option value=""></option>
                                   </select>
                               
                                <span style={{ color: "red" }}>{errors["town"]}</span>

                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div classNameName='boxx'>
                                <label htmlFor="">pin code:</label>
                                <input type="text" name="pincode" onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors["pincode"]}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div classNameName='boxx'>
                                <label htmlFor="">phone number:</label>
                                <input type="number" name="number" onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors["number"]}</span>

                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div classNameName='boxx'>
                                <label htmlFor="">street address:</label>
                                <input type="text" name="address" onChange={handleChange} />
                                <span style={{ color: "red" }}>{errors["address"]}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12">
                            <div classNameName='boxx'>
                                <label htmlFor="">company name:</label>
                                <input type="text" name="company" onChange={handleChange} />

                            </div>
                        </div>
                    </div>
                    <input type="submit" value="submit" className='text-capitalize formbtn btn btn-primary ' />
                </form>
            </div>
        </>
    )
}

export default CheckoutForm
