import React, { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import GoogleLogin from "./GoogleLogin";

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  

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

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const onSubmit = async (data) => {
    
    await signInWithEmailAndPassword(data.email, data.password);

    console.log(data);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="container mx-auto px-12">
      <h1>Login</h1>
      <form className="py-5 card" onSubmit={handleSubmit(onSubmit)}>
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
              }
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
              }
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
        <input className="btn btn-primary" value="Login" type="submit" />
      </form>
      <div><Link className="btn btn-secondary" to="/signup">SignUp</Link></div>
      
      <div>
          <GoogleLogin></GoogleLogin>
      </div>
        
    </section>
  );
};
export default Login;
