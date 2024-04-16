import React, { createContext, useContext, useState } from 'react';

// Create a context
const RestaurantContext = createContext();

// Create a provider component
export const RestaurantProvider = ({ children }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    return (
        <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
            {children}
        </RestaurantContext.Provider>
    );
};


export const useRestaurant = () => useContext(RestaurantContext);
