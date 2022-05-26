import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
  
    let errorMessage;
    if (error) {
      errorMessage = (
      <p className="text-red-500">Error: {error?.message}</p>
      );
    }
  
  
    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      return (
        <div>
            toast.success('User Created');
          <p>Signed In User: {user.email}</p>
        </div>
      );
    }
    return (
        <section>
        <div>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
        <p>{errorMessage}</p>
      </div>
        </section>
    );
};
export default GoogleLogin;