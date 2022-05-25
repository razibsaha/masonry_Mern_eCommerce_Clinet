import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, desctiption } = product;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section>
      <h1 className="text-3xl text-seondary">{name}</h1>
      <img src={img} alt="" />
      <div>{desctiption}</div>
      <button onClick={() => handleBuyNow(_id)} className="btn btn-primary">
        Buy now
      </button>
    </section>
  );
};
export default Product;
