// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user] = useAuthState(auth);
  /* const email = user.email;
  const { data: user2 ,isLoading } = useQuery(["user", email], () => 
    fetch(`http://localhost:5000/user/${email}`)
     .then(res => res.json())
  ); 

  if(!user || isLoading){
    return <Loading></Loading>
  }
 const ownPhoto = user2[0].photoURL; 
  console.log(ownPhoto);
 */

  const handleSignOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li> {user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}

            <li>
              {user ? (
                <NavLink
                  as={Link}
                  to="/login"
                  onClick={() => handleSignOut()}
                  className="btn btn-ghost"
                >
                  <span className="flex justify-center items-center">
                    {/* <img className="h-6 w-6" src={ownPhoto} alt="" /> */}
                    &nbsp;&nbsp;
                    <FontAwesomeIcon className="text-red-500" icon={faUser} />
                    &nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon
                      className="text-red-500"
                      icon={faArrowRightFromBracket}
                    />
                  </span>
                </NavLink>
              ) : (
                <NavLink as={Link} className="btn btn-warning" to="/login">
                  Login <FontAwesomeIcon icon={faArrowRightToBracket} />
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        {/* ---Pc--- */}
        <Link to="/" className="text-yellow-400 normal-case text-xl">
          Mason <span className="text-slate-50 badge-warning">ry</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end md:block hidden">
        {/* Login/signout */}

        {user ? (
          <NavLink
            as={Link}
            to="/login"
            onClick={() => handleSignOut()}
            className="btn btn-ghost"
          >
            <span className="flex justify-center items-center">
              {/* <img className="h-6 w-6" src={ownPhoto} alt="" /> */}
              &nbsp;&nbsp;
              <FontAwesomeIcon className="text-red-500" icon={faUser} />
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                className="text-red-500"
                icon={faArrowRightFromBracket}
              />
            </span>
          </NavLink>
        ) : (
          <NavLink as={Link} className="btn btn-warning" to="/login">
            Login <FontAwesomeIcon icon={faArrowRightToBracket} />
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default Navbar;
