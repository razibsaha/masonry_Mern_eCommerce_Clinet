import React from "react";
import CountUp from 'react-countup';
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const TotalUsers = () => {
    const { data: users, isLoading } = useQuery("users", () =>
    fetch(` http://localhost:5000/users`).then((res) => res.json())
  );
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="flex flex-col justify-center items-center">
      <div><h1 className="text-2xl font-bold">Total Users</h1></div>
      <div><CountUp className="text-8xl font-bold text-red-500" suffix="+" end={`${users.length}`}/><span className="text-8xl font-bold text-red-500"></span></div>
      
    </section>
  );
};
export default TotalUsers;
