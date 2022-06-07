import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import Purchase from "./Purchase";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
    isFetching,
  } = useQuery(["products", id], () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );

  console.log(product);
  if (isLoading || isFetching) {
    return <Loading></Loading>;
  }
  if (error) {
    return { error };
  }

  return (
    <section className="container mx-auto px-12">
      <div></div>
      <Purchase key={product._id} product={product}></Purchase>
    </section>
  );
};
export default ProductDetails;
