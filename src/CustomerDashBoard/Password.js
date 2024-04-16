import React from 'react'

const Password = () => {
    return (
        <>
            <div className="edit_password">
            <div className="update-password">
            <form className="" role="form">
                <div className="form-group">
                    <label for="inputPasswordOld">Current Password</label>
                    <input type="password" className="form-control" id="inputPasswordOld"
                        required="" />
                </div>
                <div className="form-group">
                    <label for="inputPasswordNew">New Password</label>
                    <input type="password" className="form-control" id="inputPasswordNew"
                        required="" />
                </div>
                <div className="form-group">
                    <label for="inputPasswordNewVerify">Verify</label>
                    <input type="password" className="form-control" id="inputPasswordNewVerify"
                        required="" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg ">Save
                Password</button>
            </form>
        </div>
            </div>
        </>
    )
}

export default Password