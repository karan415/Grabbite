import axios from 'axios';
import React, { useState } from 'react'
import './Sidebar.css'
const AddProduct = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [Saleprize, setSalePrize] = useState('');
    const [RegularPrize, setRegularPrize] = useState('')
    const [description, setDescription] = useState('');
    const [catagory, setCatagory] = useState('');
    const [saqcode, setSaqcode] = useState('');

    function addProduct(e) {
        const FormData = { name, file, Saleprize, RegularPrize, description, catagory, saqcode }

        e.preventDefault();
        axios.post('https://webstepsolutions.com/grabAPi/functions.php', FormData).then((response) => (
            console.log(response)
        )).catch((error) => {
            console.log(error);
        });

    }
    return (
        <>
            <section className=' addproducts p-5'>
                <div className='container-fluid'>
                    <div className='addproduct '>
                        <h2 className='text-center text-dark'>Add-Product</h2>
                        <form action="">
                            <br />
                            <div className="row">
                                <div className="col-lg-6">
                                    <div classNameName='boxx'>
                                        <input type="text" name="name" placeholder=" Product Name" onChange={(e) => setName(e.target.value)} /><br />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div classNameName='boxx'>
                                        <input type="text" name="prize" placeholder="Regular Prize" onChange={(e) => setRegularPrize(e.target.value)} /><br />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div classNameName='boxx'>
                                        <input type="text" name="saleprize" placeholder="Sale Prize" onChange={(e) => setSalePrize(e.target.value)} /><br />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div classNameName='boxx'>
                                        <input type="file" name="file" placeholder="file" onChange={(e) => setFile(e.target.files[0])} /><br />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div classNameName='boxx'>
                                        <input type="text" name="catagory" placeholder="Catagory"
                                            onChange={(e) => setCatagory(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-6">

                                    <div classNameName='boxx'>
                                        <input type="text" name="saqcode" placeholder="SAQ code"
                                            onChange={(e) => setSaqcode(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div classNameName='boxx'>
                                        <textarea name="description" id="" cols="30" rows="3" className='w-100' placeholder='Description' onChange={(e) => setDescription(e.target.value)} ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type='button' onClick={addProduct}>Add product</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct
