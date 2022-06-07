import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CountUp from "react-countup";
import Loading from "../Shared/Loading";

const TotalProducts = () => {
//   const [orders, setOrders] = useState([]);
  const { data: orders, isLoading } = useQuery("orders",  () => {
   return fetch("http://localhost:5000/orders")
    .then(res => res.json()
        
    )
  });

  /* useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []); */

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(orders);

  //   console.log(orders[0])
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Total Orders</h1>
      <div>
        <CountUp
          className="text-8xl text-yellow-400 font-bold"
          end={`${orders.length}`}
          suffix={`>>`}
        ></CountUp>
      </div>
    </section>
  );
};
export default TotalProducts;
