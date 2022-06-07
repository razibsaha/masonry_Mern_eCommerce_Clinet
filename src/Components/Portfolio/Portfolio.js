import React from "react";
import { Link } from "react-router-dom";
import MyImage from '../../Assets/Images/dp.png';

const Portfolio = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-8xl font-bold text-red-500 px-5">
        Portfolio
      </h1>
      <h1 className="text-center text-5xl font-regular text-yellow-500 mt-5 mb-12">
        Resume About me
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={MyImage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Razib Saha</h2>
    <p>Web Application Developer Aspirant</p>
    <p> <span className="font-bold">Education: </span> Bachelor in Mathematics</p>
    <p> <span className="font-bold">Mobile: </span> 01719881180</p>
    <p> <span className="font-bold">Linkedin : </span> <Link className="text-blue-400" to="https://www.linkedin.com/in/razibsaha/">Go to Profile</Link> </p>
    
  </div>
</div>
    </section>
  );
};
export default Portfolio;
