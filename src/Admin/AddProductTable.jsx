import React, { useState } from 'react'
import TabelData from './TabelData';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from 'react-icons/fa'
const AddProductTable = () => {
    const [tabelItem, setTabelItem] = useState(TabelData);
    
    return (
        <>
            <section className=' productlist p-5'>
                <div className='container-fluid'>
                    <h2 className='text-center py-3'>product list</h2>
                    <div class="table">

                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope='col'>Product name</th>
                                    <th scope='col'>Regular Prize</th>
                                    <th scope='col'>Sale Prize</th>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Catagory</th>
                                    <th scope='col'>SAQ Code</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelItem.map((item, indx) => {
                                    return (
                                        <>
                                            <tr id={item.id} key={indx}>
                                                <th scope="row" className="col">{item.label}</th>
                                                <td data-label='productname' >{item.productname}</td>
                                                <td data-label='regular prize' >{item.regularPrize}</td>
                                                <td data-label='Sale Prize' >{item.SalePrize}</td>
                                                <td data-label='Image' ><img src={item.Image} alt="" /></td>
                                                <td data-label='Catagory' >{item.Catagory}</td>
                                                <td data-label='SAQ Code' >{item.SAQCode}</td>
                                                <td data-label='Description' >{item.Description} </td>
                                                <td data-label='Action' ><a href="" className='me-2'><FaEdit /></a> <a href=""><RiDeleteBin6Line /></a></td>
                                            </tr>
                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProductTable
