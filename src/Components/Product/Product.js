import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, price, description } = product;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}<div className="badge text-white px-4 py-3 badge-error">${price}</div></h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleBuyNow(_id)} className="btn btn-outline btn-warning w-full">Buy Now</button>
    </div>
  </div>
</div>
  );
};
export default Product;
