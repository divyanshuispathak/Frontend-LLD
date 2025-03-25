import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products ? (
    <div className="flex flex-wrap gap-4 mb-4 ml-4">
      {Array(15).fill(0).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="bg-gray-200">
      <h2 className="text-xl font-bold mb-4 ml-4">Products</h2>
      <ul className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ul>
    </div>
  );
};

export default Body;
