import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Review = ({ product }) => {
  const { name, img, review, description } = product;
  return (
    <section>
      <div className="card mx-5 w-auto bg-base-100 shadow-xl">
        <div className="card-body flex justify-center items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p className="text-center">{description}</p>
          <Rating
                  initialRating={review}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={
                    <FontAwesomeIcon
                      style={{ color: "#ef4444" }}
                      icon={faStar}
                    />
                  }
                  readonly
                ></Rating>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </section>
  );
};
export default Review;
