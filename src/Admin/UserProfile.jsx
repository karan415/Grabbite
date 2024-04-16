import React from 'react'
import { FaCamera } from 'react-icons/fa'
const UserProfile = () => {
    return (
        <>
            <section className='p-5 userprofile'>
                <div className='container-fluid'>
                    <div className="main-profile">
                        <h2 className='text-center py-3'>Your Profile</h2>
                        <div className="profile-info py-4">
                            <div className="row d-flex justify-content-between">
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col">
                                            <div className="user-img">
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="user-info">
                                                <h4>John Smith</h4>
                                                <h5>@johnny.s</h5>
                                                <h6>Last seen <span>2</span>hours ago</h6>
                                                <button className="btn btn-primary"><FaCamera /> Change Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex justify-content-end">
                                    <div className="ad-inner">
                                        <button className="btn btn-secondary">
                                            administrator
                                        </button>
                                        <h6>joined 12 Dec 2023</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="personal-info">
                            <h4>Setting</h4>
                            <div className="personal-form">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" className="w-100">Full Name</label>
                                                <input type="text" className="w-100" placeholder="john Smith" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" className="w-100">UserName</label>
                                                <input type="text" className="w-100" placeholder="Johny.s" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className='boxx'>
                                                <label for="" className="w-100">email address:</label>
                                                <input type="email" className="w-100" placeholder="admin@example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" class="w-100">InstaGram</label>
                                                <input type="text" class="w-100" placeholder="john Smith123" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" class="w-100">FaceBook</label>
                                                <input type="text" class="w-100" placeholder="Johny.shf" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-lg-12">
                                            <div className='boxx'>
                                                <label for="" class="w-100">Snapchat</label>
                                                <input type="text" class="w-100" placeholder="itz132" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" class="w-100">IYoutube</label>
                                                <input type="text" class="w-100" placeholder="john Smith@123" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='boxx'>
                                                <label for="" class="w-100">Twitter</label>
                                                <input type="text" class="w-100" placeholder="Johny.shf" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className='boxx'>
                                                <label for="" class="w-100">About</label>
                                                <textarea name="" id="" cols="30" rows="5" class="w-100"
                                                    placeholder="My Bio"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='personal-btn d-flex justify-content-end'>
                                        <button class="btn btn-primary mt-3 w-25 py-3">Update</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="security-info row ">
                            <div class="col-lg-12">
                                <div class="security-form m-auto">
                                    <h4>Change Password</h4>
                                    <form action="">
                                        <label for="" class="w-100">Current Password</label>
                                        <input type="password" name="" id="" class="w-100" />
                                        <label for="" class="w-100">New Password</label>
                                        <input type="password" name="" id="" class="w-100" />
                                        <label for="" class="w-100">Confirm Password</label>
                                        <input type="password" name="" id="" class="w-100" />
                                        <button class="btn btn-primary w-100 mt-4 py-3">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfile