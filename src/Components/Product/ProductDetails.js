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
    isFetching
  } = useQuery(["products", id], () =>
    fetch(`https://nameless-springs-99722.herokuapp.com/product/${id}`).then((res) => res.json())
  );


  console.log(product);
  if (isLoading || isFetching) {
    return <Loading></Loading>;
  }
  if (error) {
    return { error };
  }

  const { _id, name, img, price, description } = product;

  return (
    <section>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-sm">{description}</h1>
      <h1>{id}</h1>
      <h1 className="text-red-500 font-bold">{price}</h1>
      <img src={img} alt="" />
      <div></div>
      <Purchase key={product._id} product={product}></Purchase>
    </section>
  );
};
export default ProductDetails;
