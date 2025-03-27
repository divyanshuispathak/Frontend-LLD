import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useQuery } from "@tanstack/react-query";

// const fetchData = async () => {
//   const response = await fetch("https://dummyjson.com/products");
//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   const data = await response.json();
//   return data.products;
// };

// const { data: products } = useQuery({
//   queryKey: ["products"],  // Pass as an object
//   queryFn: fetchData,  // Pass as an object
//   staleTime: 5 * 60 * 1000, // Cache for 5 minutes (prevents unnecessary re-fetch)
// });

const Body = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://meme-api.com/gimme/20");
      const data = await response.json();
      console.log("Data from API", data);
      setLoading(false);
      // setProducts(data.memes);
      setProducts((memes) => [...memes, ...data.memes]);
    } catch (error) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("fetch more data");
      fetchData();
    }
  }

  return (
    <div className="bg-gray-200">
      <h2 className="text-xl font-bold mb-4 ml-4">Products</h2>
      <ul className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} productData={product} />
        ))}
      </ul>
      {
        loading && <div className="flex flex-wrap gap-4 mb-4 ml-4">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Shimmer key={index} />
          ))}
      </div>
      }
    </div>
  );
};

export default Body;
