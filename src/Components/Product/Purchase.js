import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = ({ product }) => {
  const {_id, name, price, description, img, minValue, available } = product;
  const [user, loading] = useAuthState(auth);
  const [newOrder, setNewOrder] = useState(true);

  if (loading) {
    <Loading></Loading>;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      productId: `${_id}`,
      name: `${name}`,
      img: `${img}`,
      description: `${description}`,
      address: "",
      email: `${user?.email}`,
      quantity: 0,
    },
  });

  const onSubmit = (data) => {
    if (data.quantity < minValue || data.quantity > available) {
      toast.error(
        "Your order unit exceeds our stock, Please try between range"
      );
      setNewOrder(false);
    } else {
      const orderAmount = price * data.quantity;
      data.totalPrice = orderAmount;
      data.name = name;
      console.log(data);
      const url = "http://localhost:5000/orders";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            console.log(result);
            toast.success("Order ready for pay");
            reset();
          } else {
            toast.error("Order Not Placed");
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-red-500 px-5 py-8">
        Make Order!
      </h1>
      <div className="container mx-auto flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img
          className="object-cover md:w-[500px] md:object-fill"
          src={img}
          alt="Album"
        />
        <div className="md:pl-5 p-5">
          <h2 className="card-title mb-3">{name}</h2>
          <p className="mb-5 max-w-xs">{description}</p>
          <div className="card-actions justify-center w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <input
                type="email"
                name="email"
                readOnly
                placeholder={user?.email}
                className="input input-bordered max-w-xs"
              />
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered max-w-xs"
                {...register("address", { required: true, maxLength: 300 })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="input input-bordered max-w-xs"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is Required",
                  },
                })}
              />

              <label className="label max-w-xs">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder={`minimum ${minValue} to ${available}`}
                className="input input-bordered  w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                  min: {
                    value: 3,
                    message: `Minimum value is ${minValue}`,
                  },
                  max: {
                    value: 465,
                    message: `Minimum value is ${minValue}`,
                  },
                }
                )}
              />
              <input
                disabled={!isValid || !newOrder}
                className="rounded-lg text-slate-100 w-full border-gray-200 mb-5 disabled:bg-slate-300 bg-primary hover:bg-secondary max-w-xs"
                type="submit"
                value="Add item"
              />
              {/* <input
            type="number"
            className="input input-bordered w-full max-w-xs font-bold text-red-500"
            readOnly
            value={minValue * price}
            className="input input-bordered"
            {...register("totalPrice")}
          /> */}

              {/* <div>
          <input
            type="number"
            placeholder={`${minValue} to ${available}`}
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
              },

              min: {
                value: 3,
                message: "min number plz",
              },

              max: {
                value: 200,
                message: "max exceeded",
              },
            })}
          />
        </div> */}

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Purchase;
