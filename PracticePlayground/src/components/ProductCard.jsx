import React from 'react'

const ProductCard = ({ productData }) => {
  return (
    <div className='flex items-center m-auto gap-2 p-4 w-64 h-42 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
      <h3 className='text-lg font-semibold' key={productData.id}>{productData.title}</h3>
      {/* <li>{productData.description}</li> */}
      <li>{productData.rating}</li>
    </div>
  );
};

export default ProductCard;
