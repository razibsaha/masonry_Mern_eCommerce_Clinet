import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    <div>
      <p className="text-red-500">Error: {error.message}</p>
    </div>;
  }

  return (
    <section className="container mx-auto flex justify-center items-center lg:px-40 px-12 mt-12 mb-20">
      {/* card */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form className="py-5 card" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-actions justify-start">
              <div className="form-control -mt-5 w-full max-w-xs">
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
              <div className="w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
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
                <p className="text-red-500">{error?.message}</p>
              </div>
              <input className="btn btn-primary" value="Login" type="submit" />
            </div>
          </form>
          <div>
            <span>
              Don't have an account?{" "}
              <Link className="text-primary" to="/signup">
                SignUp
              </Link>
            </span>
          </div>

          <div className="w-full max-w-xs">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
