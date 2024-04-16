import React from 'react'

const OrderBar = () => {
    return (
        <>
            <div className="table-filter p-4">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="filter-group">
                            <label>Show</label>
                            <select className="form-control w-50">
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                            <span>entries</span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="filter-group">
                            <span>Status</span>
                            <select className="form-control w-50">
                                <option>Any</option>
                                <option>Delivered</option>
                                <option>Shipped</option>
                                <option>Pending</option>
                                <option>Cancelled</option>
                            </select>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="filter-group">
                            <span>Name</span>
                            <input type="search" name="" id="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderBar