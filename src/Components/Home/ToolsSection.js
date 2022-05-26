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
    fetch(` https://nameless-springs-99722.herokuapp.com/products`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return { error };
  }
  return (
    <section>
      <h1>ToolsSection</h1>
      <div>
        <h1>Total tools : {products.length}</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
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
