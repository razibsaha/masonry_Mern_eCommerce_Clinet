import React from "react";
import { useQuery } from "react-query";
import Product from "../Product/Product";
import Loading from "../Shared/Loading";

const ToolsSection = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery("products", () =>
    fetch(` http://localhost:5000/products`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return { error };
  }
  return (
    <section className="container mx-auto lg:px-12 flex-col justify-center items-center mt-14">
      <div>
      <h1 className="text-center text-8xl font-bold text-red-500 px-5">Best Product in The Market</h1>
      <h1 className="text-center text-5xl font-regular text-yellow-500 mt-5 mb-12">Best Price Guranted!!!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-center mx-auto">
        {products.map((product) => (
          <Product
            refetch={refetch}
            key={product._id}
            product={product}
          ></Product>
        ))}
      </div>
    </section>
  );
};
export default ToolsSection;
