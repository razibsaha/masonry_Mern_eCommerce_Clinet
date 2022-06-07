import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick/lib/slider";
import Loading from "../Shared/Loading";
import Review from "./Review";

const ReviewsHome = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery("products", () =>
    fetch(` http://localhost:5000/products`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return { error };
  }
  return (
    <section className="container mx-auto lg:px-12 flex-col justify-center items-center mt-14">
      <div>
        <h1 className="text-center text-5xl font-regular text-yellow-500 mt-5 mb-12">
          Some Good Reviews!!!
        </h1>
      </div>
      <div className="">
        <Slider {...settings}>
          {products.map((product) => (
            <Review
              refetch={refetch}
              key={product._id}
              product={product}
            ></Review>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default ReviewsHome;
