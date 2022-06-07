import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const imageStorageKey = "c323997fa86aa80f13806af85bd42453";

  useEffect(() => {
    if (user) {
      toast.success("User Registered successfully");
      navigate("/home");
    }
  }, [navigate, user]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    }).then((res) =>
      res.json().then((result) => {
        if (result.success) {
          const photoURL = result.data.url;
          const user = {
            name: data.name,
            email: data.email,
            photoURL: photoURL,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Registration Successful");
                reset();
              } else {
                toast.error("Registration Failed");
              }
            });
          console.log(result);
        }
      })
    );

    const name = data?.name;
    const photoURL = data?.photoURL;
    console.log(photoURL);

    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: name, setPhotoURL: photoURL });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="container mx-auto flex justify-center items-center lg:px-40 px-12 mt-12 mb-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>
          <div className="card-actions justify-end">
            <form className="card" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5 mb-5">
                <input
                  type="text"
                  className="input input-bordered py-5"
                  placeholder="Your Full Name"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    maxLength: 80,
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                      message: `Don't use special characters`,
                    },
                  })}
                />
                <label>
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full max-w-xs">
                <label>
                  <span className="label-text">Display Photo</span>
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-bold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label>
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
                <label>
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
                <label>
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
              <input
                className="btn btn-primary"
                value="Register"
                type="submit"
              />
            </form>
            <div className="flex justify-center items-center">
              <span>
                All ready have an account?
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </span>
            </div>

            <div className="w-full max-w-xs">
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
