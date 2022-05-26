import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>;
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
    return (
        <section>
        <h1>Login</h1>
        <div>
        <button className='btn btn-primary' onClick={() => signInWithGoogle()}>Sign In</button>
        </div>
        </section>
    );
};
export default Login;