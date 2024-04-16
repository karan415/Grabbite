// App.js or any parent component
import React from 'react';
import { TabProvider } from './TabContext';
import Popular from './Popular';

const Product = () => {
  return (
    <TabProvider>
      <Popular />
    </TabProvider>
  );
};

export default Product;
