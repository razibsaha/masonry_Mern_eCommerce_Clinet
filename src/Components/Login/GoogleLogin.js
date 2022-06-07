import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const GoogleLogin = () => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);

  const [user, loading] = useAuthState(auth);
  console.log(user);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <section className="mt-5 mb-5 ">
      <p className="text-red-500 mb-5">{error?.message}</p>
      <div className="w-full max-w-xs">
        <button
          className="btn btn-outline w-full"
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
      </div>
    </section>
  );
};
export default GoogleLogin;
