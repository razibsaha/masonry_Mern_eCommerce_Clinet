import React from "react";
import CountUp from "react-countup";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const TotalProducts = () => {
  const { data: products, isLoading } = useQuery("products", () => {
    fetch("http://localhost:5000/products")
    .then(res => res.json());
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Total Products</h1>
      <div>
        <CountUp
          className="text-8xl text-blue-500 font-bold"
          end={`${products.length}`} suffix="+"
        ></CountUp>
      </div>
    </section>
  );
};
export default TotalProducts;
