import React from 'react'

const EditProfile = () => {
  return (
    <>
    <div className="edit-profile">
    <div className="row gutters profile-updation m-0">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
            <div className="card-body">
                <div className="account-settings">
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                alt="Maxwell Admin"/>
                        </div>
                        <span className="user-name text-center d-block fs-5">username</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 mt-4 mt-lg-0">
        <div className="card h-100">
            <div className="card-body mb-p-0">
                <div className="row gutters m-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-dark fs-4">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="fullName">Full Name</label>
                            <input type="text" className="form-control p-2" id="fullName"
                                placeholder="Enter full name"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="eMail">Email</label>
                            <input type="email" className="form-control p-2" id="eMail"
                                placeholder="Enter email ID"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="phone">Phone</label>
                            <input type="text" className="form-control p-2" id="phone"
                                placeholder="Enter phone number"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="website">Website URL</label>
                            <input type="url" className="form-control p-2" id="website"
                                placeholder="Website url"/>
                        </div>
                    </div>
                </div>
                <div className="row gutters m-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mt-3 mb-2 text-dark fs-4">Address</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="Street">Street</label>
                            <input type="name" className="form-control p-2" id="Street"
                                placeholder="Enter Street"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="ciTy">City</label>
                            <input type="name" className="form-control p-2" id="ciTy"
                                placeholder="Enter City"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="sTate">State</label>
                            <input type="text" className="form-control p-2" id="sTate"
                                placeholder="Enter State"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label className='mt-sm-0 mt-2 ' for="zIp">Zip Code</label>
                            <input type="text" className="form-control p-2" id="zIp"
                                placeholder="Zip Code"/>
                        </div>
                    </div>
                </div>
                <div className="row gutters mt-4 ms-1">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                            <button type="button" id="submit" name="submit"
                                className="btn btn-secondary p-2">Cancel</button>
                            <button type="button" id="submit" name="submit"
                                className="btn btn-primary m-0 ms-3">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default EditProfile