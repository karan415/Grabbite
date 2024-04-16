import React, { useState } from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { FaCogs } from "react-icons/fa";
import { TbTableShare } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import MyOrders from './MyOrders';
import AddressBook from './AddressBook';
import Password from './Password';
import EditProfile from './EditProfile';
import SharedOrder from './SharedOrder';
import { Helmet } from 'react-helmet';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('OrderHistory');
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const TabCompo = {
    'OrderHistory': <MyOrders />,
    'EditProfile': <EditProfile />,
    'Password': <Password />,
    'AddressBook': <AddressBook />,
    'SharedOrder': <SharedOrder />
  };

  return (
    <>
    <Helmet>
    <meta name="description" content="This is my home page" />
    <title>{activeTab}</title>
    </Helmet>
    <section className="customer-dashboard py-5">
      <div className="container">
        <div className="sidebar mb-4">
          <div className="">
            <div className="sidebar_inner">
              <ul>
                <li className={activeTab === 'OrderHistory' ? 'active' : ''} onClick={() => handleTab('OrderHistory')}><span><AiFillDashboard /></span>order History</li>
                <li className={activeTab === 'EditProfile' ? 'active' : ''} onClick={() => handleTab('EditProfile')}><span><AiFillDashboard /></span>Edit Profile</li>
                <li className={activeTab === 'Password' ? 'active' : ''} onClick={() => handleTab('Password')}><span><FaCogs /></span>change password</li>
                <li className={activeTab === 'AddressBook' ? 'active' : ''} onClick={() => handleTab('AddressBook')}><span><TbTableShare /></span>Address Book</li>
                <li className={activeTab === 'SharedOrder' ? 'active' : ''} onClick={() => handleTab('SharedOrder')}><span><IoStatsChartSharp /></span>Shared Orders</li>
                <li className='logout'><span><FaSignOutAlt /></span>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" p-0">
          <div className="body">
            {TabCompo[activeTab]}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default SideBar;
