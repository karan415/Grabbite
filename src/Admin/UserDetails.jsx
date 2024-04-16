import React from 'react';
import productimg from '../Img/Restopizaa.png';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

const OrderDetail = () => {
    const navigate = useNavigate();

    const gotoNextPage = () => {
        navigate('/order');
    };

    // Define an array of order details
    const orderDetails = [
        {
            id:0,
            orderNumber: '#101',
            productImage: productimg,
            productName: 'Productname',
            orderDate: '4/11/2023',
            status: { text: 'Cancelled', color: 'text-danger' },
            prize: '$23.00',
        },
        {
            id:1,
            orderNumber: '#102',
            productImage: productimg,
            productName: 'Productname',
            orderDate: '4/11/2023',
            status: { text: 'Shipped', color: 'text-info' },
            prize: '$25.00',
        },
        {
            id:2,
            orderNumber: '#103',
            productImage: productimg,
            productName: 'Productname',
            orderDate: '4/11/2023',
            status: { text: 'Delivered', color: 'text-success' },
            prize: '$30.00',
        },
        {
            id:3,
            orderNumber: '#104',
            productImage: productimg,
            productName: 'Productname',
            orderDate: '4/11/2023',
            status: { text: 'Pending', color: 'text-warning' },
            prize: '$40.00',
        },
        {
            id:4,
            orderNumber: '#105',
            productImage: productimg,
            productName: 'Productname',
            orderDate: '4/11/2023',
            status: { text: 'Delivered', color: 'text-success' },
            prize: '$10.00',
        },
    ];

    return (
        <>
            <section className="p-5">
                <div className="container-fluid">
                    <h2 className="text-center py-3">Product detail</h2>
                    <div className="topbar-tables"></div>
                    <div className="table product-list">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Order Number</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Prize</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.map((order, index) => (
                                    <tr key={index} id={order.id}>
                                        <th scope="row">{order.orderNumber}</th>
                                        <td data-label="Product Image">
                                            <img src={order.productImage} alt="" />
                                        </td>
                                        <td data-label="Product name">{order.productName}</td>
                                        <td data-label="Order Date">{order.orderDate}</td>
                                        <td data-label="Status">
                                            <FaCircle className={order.status.color} /> {order.status.text}
                                        </td>
                                        <td data-label="Prize">{order.prize}</td>
                                        <td data-label="Action">
                                            <a href="#" onClick={gotoNextPage}>
                                                <BsArrowRightCircle />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderDetail;
