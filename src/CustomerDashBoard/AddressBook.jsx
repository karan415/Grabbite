import React from 'react';
import '../GrabBite/CSS/Adress.css';

const AddressBook = () => {
    const addresses = [
        {
            id:0,
            name: 'Shikha Atter',
            addressDetails: 'webstep solutions E 45, Phase-8, Industrial Area, Sector 62, Sahibzada Ajit Singh Nagar, Punjab 160059',
            contactNumber: '+91 9817818223',
        },
        {
            id:1,
            name: 'Shikha Atter',
            addressDetails: 'webstep solutions E 45, Phase-8, Industrial Area, Sector 62, Sahibzada Ajit Singh Nagar, Punjab 160059',
            contactNumber: '+91 9817818223',
        },
        {
            id:2,
            name: 'Shikha Atter',
            addressDetails: 'webstep solutions E 45, Phase-8, Industrial Area, Sector 62, Sahibzada Ajit Singh Nagar, Punjab 160059',
            contactNumber: '+91 9817818223',
        },

    ];

    return (
        <>
            <div className=" max-orders">
                <div className="order_S_inner row">
                    {addresses.map((address, index) => (
                        <div key={index} id={address.id} className="address_book my-4 col-md-6">
                            <div className="address_box">
                                <h5>{address.name}</h5>
                                <div className="address">
                                    <h5>
                                        <span className="company_home">{address.addressDetails}</span>
                                    </h5>
                                    <h5 className="contact_number d-flex justify-content-between">
                                        {address.contactNumber}
                                        <span className="edit text-end text-warning fw-bold">Edit</span>
                                    </h5>
                                    <button className="btn btn-primary">deliver to this address</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary">Add new Address</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressBook;
