import React from 'react';
import productimg from '../Img/FerryPizza.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const ProductCategory = () => {
    // Define an array of products
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: productimg,
            description: 'Lorem ipsum dolor sit amet consectetur',
        },
        {
            id: 2,
            name: 'Product 2',
            image: productimg,
            description: 'Lorem ipsum dolor sit amet consectetur',
        },
        {
            id: 3,
            name: 'Product 3',
            image: productimg,
            description: 'Lorem ipsum dolor sit amet consectetur',
        },
        {
            id: 4,
            name: 'Product 3',
            image: productimg,
            description: 'Lorem ipsum dolor sit amet consectetur',
        },
        {
            id: 5,
            name: 'Product 3',
            image: productimg,
            description: 'Lorem ipsum dolor sit amet consectetur',
        },

    ];

    return (
        <>
            <section className="p-5">
                <div className="container-fluid">
                    <h2 className="text-center py-3">Product category</h2>
                    <div className="table product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} id={product.id}>
                                        <th scope="row" className="col">{index + 1}</th>
                                        <td data-label="productname">{product.name}</td>
                                        <td data-label="Image"><img src={product.image} alt="" /></td>
                                        <td data-label="Description">{product.description}</td>
                                        <td data-label="Action">
                                            <i className="me-2"><FaEdit /></i>
                                            <i><RiDeleteBin6Line /></i>
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

export default ProductCategory;
