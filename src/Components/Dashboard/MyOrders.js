import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
  const email = user.email;
  console.log(email);

  const { data: orders, isLoading } = useQuery(["user", email], () => {
    return fetch(`http://localhost:5000/orders/${email}`)
      .then((res) => res.json())
  });

  console.log(orders);

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <h1> Hello : {orders.length}</h1>
      <div></div>
    </section>
  );
};
export default MyOrders;