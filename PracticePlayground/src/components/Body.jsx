import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
    <>Loading....</>
  ) : (
    <div className="bg-gray-100">
      <h2 className="text-xl font-bold mb-4 ml-4">Products</h2>
      <ul className="flex flex-wrap gap-6">
        {products.map((product) => (
          <ProductCard productData={product} />
        ))}
      </ul>
    </div>
  );
};

export default Body;
