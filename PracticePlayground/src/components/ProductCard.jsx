import React from 'react'

const ProductCard = ({ productData }) => {
  return (
    <div className='flex flex-col m-auto gap-2 p-4 w-64 h-42 border border-gray-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
      <h3 className='text-lg font-semibold'>{productData.author}</h3>
      {/* <h3>{productData.description}</h3> */}
      <h5>{productData.url}</h5>
    </div>
  );
};

export default ProductCard;
