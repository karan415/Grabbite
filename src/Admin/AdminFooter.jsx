import React from 'react'

const AdminFooter = () => {
  return (
    <>
      <footer className='p-3 custom-footer class sticky-footer'>

        <div className="copyright d-flex justify-content-between p-4 rounded-3">
          <h3 className='grab m-0'> @Copyright 2021 Grabbite</h3>
          <ul className='d-flex justify-content-end align-items-center  footer-menu'>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default AdminFooter