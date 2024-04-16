import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { AiFillDashboard } from "react-icons/ai";
import { FaCogs } from "react-icons/fa";
import { CgComponents } from "react-icons/cg";
import { LuUtilityPole } from "react-icons/lu";
import { TbTableShare } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import './Sidebar.css'
import DashBoard from './DashBoard'
import Interface from './Interface'
import AddProduct from './AddProduct'
import AddProductTable from './AddProductTable'
import ProductCatogary from './ProductCatogary'
import UserProfile from './UserProfile'
import UserDetails from './UserDetails'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import OrderDetail from './UserDetails';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const handleTab = (tab) => {
    setActiveTab(tab)
  }
  const TabCompo = {
    'dashboard': <DashBoard />,
    'interface': <Interface />,
    'addproduct': <AddProduct />,
    'producttabel': <AddProductTable />,
    'product catogary': <ProductCatogary />,
    'userprofile': <UserProfile />,
    'userdetails': <UserDetails />,
    'orderdetails': <OrderDetail />

  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 sidebar">

          <div className="">
            <div className="sidebar_inner">
              <ul>
                <li onClick={() => handleTab('dashboard')}><span><AiFillDashboard /></span>Dashboard </li>
                <li onClick={() => handleTab('interface')}><span><FaCogs /></span>Interface</li>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-custom-components" className='custom_compo'>
                    <span><CgComponents /></span>Custom components
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => handleTab('addproduct')}>Addproduct</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => handleTab('producttabel')}>Product Tabel</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => handleTab('product catogary')}>Product catogary</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => handleTab('userprofile')}>user profile</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => handleTab('orderdetails')}>Order details</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-custom-utilities" className='custom_compo'>
                    <span><LuUtilityPole /></span>Custom Utilities
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Colors</Dropdown.Item>
                    <Dropdown.Item href="#">Borders</Dropdown.Item>
                    <Dropdown.Item href="#">Animations</Dropdown.Item>
                    <Dropdown.Item href="#">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <li><span><TbTableShare /></span>Tables</li>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-pages-custom" className='custom_compo'>
                    <span><SiPowerpages /></span>Pages Custom
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Login</Dropdown.Item>
                    <Dropdown.Item href="#">Register</Dropdown.Item>
                    <Dropdown.Item href="#">Forgot Password</Dropdown.Item>
                    <Dropdown.Item href="#">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <li><span><IoStatsChartSharp /></span>Charts</li>
                <li className='logout'><span><FaSignOutAlt /></span>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="body">
            <AdminHeader />
            {TabCompo[activeTab]}
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar