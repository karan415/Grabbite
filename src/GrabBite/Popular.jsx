import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Del.css';
import item from './PopularApi';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../CartContext';
import Cards from './Cards';
const Popular = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { cartItem, setCartItem, setQuantities, quantities, updateQuantities } = useCart();
  const [addedItem, setAddedItem] = useState(null);

  const AllData = item[activeTab];

  const handelTab = (tab) => {
    setActiveTab(tab);
  }

  const handleAddToCart = (curElm) => {
    const index = cartItem.findIndex(cartItem => cartItem.id === curElm.id);

    if (index !== -1) {
      const updatedCart = cartItem.map((item, i) => (
        i === index ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      ));
      setCartItem(updatedCart);

      const updatedQuantities = [...quantities];
      updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
      updateQuantities(updatedQuantities);
    } else {
      setCartItem(prevCart => [...prevCart, { ...curElm, quantity: 1 }]);
      setQuantities(prevQuantities => [...prevQuantities, 1]);
    }

    setAddedItem(curElm);
    setTimeout(() => {
      setAddedItem(null);
    }, 3000);
  };

  return (
    <>
  

      <section className="custom-popular products-data py-5 pb-1" id='products'>
        <div className="container text-center">
          <Cards />
          <div className="float pb-5 mb-4 pt-3 tab-list">
            <ul>
              <li onClick={() => handelTab('All')} className={activeTab === 'All' ? 'active' : ''}>all menu</li>
              <li onClick={() => handelTab('Burger')} className={activeTab === 'Burger' ? 'active' : ''}>burger</li>
              <li onClick={() => handelTab('Dosa')} className={activeTab === 'Dosa' ? 'active' : ''}>dosa</li>
              <li onClick={() => handelTab('Chicken')} className={activeTab === 'Chicken' ? 'active' : ''}>chicken</li>
              <li onClick={() => handelTab('Vegetables')} className={activeTab === 'Vegetables' ? 'active' : ''}>vegetables</li>
              <li onClick={() => handelTab('Pasta')} className={activeTab === 'Pasta' ? 'active' : ''}>pasta</li>
            </ul>
          </div>
          
              <div className="flex_box">
              {AllData.map((curElm,index) => {
                return (
                  <div className="col menubar colflex" key={index} id={curElm.id}>
                    <div className="dish-img">
                      <img src={curElm.img} className="popular-img" alt={curElm.dishes} />
                    </div>
                    <div className="card-box">
                      <ul>
                        <li>{curElm.dishes}</li>
                        <li className="review"><img src={curElm.review} className="popular-img" alt={curElm.review} /></li>
                        <li className="variety">{curElm.product}</li>
                        <li className="prize">₹{curElm.price}</li>
                      </ul>
                      <ul className="d-flex justify-content-around">
                        <button className="addtocart">
                          {addedItem === curElm ? (
                            <>
                              item added
                              <Link to='/cart'>view cart</Link>
                            </>
                          ) : (
                            <span onClick={() => handleAddToCart(curElm)}>Add To Cart <span className="hyy"><FaCartPlus /></span></span>
                          )}
                        </button>
                        <li className="like">{curElm.like}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            </div>
      </section>
    </>
  );
};

export default Popular;
