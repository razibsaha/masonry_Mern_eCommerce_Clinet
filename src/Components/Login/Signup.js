import { async } from "@firebase/util";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    const name = data?.name;

    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: name });

    console.log(data);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="container mx-auto px-5 gap-5 md:px-12">
      <form className="py-5 card" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 mb-5">
          <input
            type="text"
            className="input input-bordered py-5"
            placeholder="Your Full Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              maxLength: 80,
              pattern: {
                value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                message: `Don't use special characters`,
              },
            })}
          />
          <br />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password", {
              required: {
                value: true,
                message: `Please provide a password between 6 to 30 character`,
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <input className="btn btn-primary" value="Register" type="submit" />
      </form>
      <GoogleLogin></GoogleLogin>
      <div>
        <Link className="btn btn-se" to="/login">
          Login
        </Link>
      </div>
    </section>
  );
};
export default Signup;
