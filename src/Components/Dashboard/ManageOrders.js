import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrdersRow from "./OrdersRow";

const ManageOrders = () => {
  const { data: orders, isLoading } = useQuery("orders", () => {
    return fetch(`http://localhost:5000/orders`).then((res) => res.json());
  });
  

  console.log(orders);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
        <table className="table">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Product</th>
          <th>User Email</th>
          <th>Address</th>
          <th>Quantity</th>
          <th>Cart Total</th>
          <th>Manage</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
          
        {orders.map((order,index) => (
            <OrdersRow key={order._id} order={order}
            index={index}>
              
            </OrdersRow>
          
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default ManageOrders;
