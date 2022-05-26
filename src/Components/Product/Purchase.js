import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = ({ product }) => {
  const { _id, name, price,description, img, minValue, available } = product;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    <Loading></Loading>;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      address: "",
      email: `${user?.email}`,
      description: `${description}`,
      image: `${img}`,
      min: `${minValue}`,
    },
    price: 0,
    quantity: {
        min: `${minValue}`,
        max: `${available}`,
    },
  });

  const onSubmit = async (data) => {

    console.log(data);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
        type="text"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs"
          {...register("address", { required: true, maxLength: 300 })}
        />
        <div>
          <input
            type="number"
            placeholder={`${minValue} to ${available}`}
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
              },
              min: {
                value: true,
                message: "min number plz",
              },

              max: {
                value: true,
                message: "max exceeded",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="">
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              /* disabled={!isDirty || !isValid} */
              className="rounded-lg p-4  mr-0  text-slate-100 w-full border-gray-200 mb-5 disabled:bg-slate-300 bg-[#ee316b] hover:bg-[#842d72]"
              type="submit"
              value="Add item"
            />
          </div>
      </form>
    </section>
  );
};
export default Purchase;
