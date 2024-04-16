// CartProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const [cartItem, setCartItem] = useState(() => {
    const cartData = localStorage.getItem('cartItem');
    return cartData ? JSON.parse(cartData) : [];
  });

  const [quantities, setQuantities] = useState(() => {
    const quantitiesData = localStorage.getItem('quantities');
    return quantitiesData ? JSON.parse(quantitiesData) : Array(cartItem.length).fill(1);
  });

  const deleteItem = (index) => {
    const updatedCart = [...cartItem];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);

    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    updateQuantities(newQuantities);

    // Remove discount if appliedCoupon exists and cart becomes empty
    if (appliedCoupon && updatedCart.length === 0) {
      localStorage.removeItem('appliedCoupon');
      setAppliedCoupon('');
      setDiscountApplied(false);
    }
  };

  const updateCart = (updatedCart) => {
    setCartItem(updatedCart);
    localStorage.setItem('cartItem', JSON.stringify(updatedCart));
  };

  const updateQuantities = (updatedQuantities) => {
    setQuantities(updatedQuantities);
    localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantity;
      updateQuantities(newQuantities);
    }
  };

  const totalAmount = cartItem.reduce((acc, curElm, index) => {
    const itemPrice = parseFloat(curElm.price);
    const itemQuantity = quantities[index] || 0;
    return acc + itemPrice * itemQuantity;
  }, 0).toFixed(2);

  const applyCoupon = (couponCode) => {
    if (!couponCode) {
      alert('Please enter your coupon code');
      return;
    }
    // Apply coupon logic here
    setAppliedCoupon(couponCode);
    setDiscountApplied(true);
    localStorage.setItem('appliedCoupon', couponCode);
  };

  const removeCoupon = () => {
    localStorage.removeItem('appliedCoupon');
    setAppliedCoupon('');
    setDiscountApplied(false);
  };

  const discountedTotalAmount = discountApplied ? (totalAmount * 0.8).toFixed(2) : totalAmount;

  useEffect(() => {
    const storedCoupon = localStorage.getItem('appliedCoupon');

    if (storedCoupon) {
      setAppliedCoupon(storedCoupon);
      setDiscountApplied(true);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('cartItem', JSON.stringify(cartItem));
      localStorage.setItem('quantities', JSON.stringify(quantities));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartItem, quantities]);

  const cartLength = cartItem.length;

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        quantities,
        updateCart,
        updateQuantities,
        setQuantities,
        cartLength,
        applyCoupon,
        deleteItem,
        updateQuantity,
        totalAmount,
        discountedTotalAmount,
        discountApplied,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
