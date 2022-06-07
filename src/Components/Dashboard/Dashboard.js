import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-7 md:px-12 drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <div></div>

        <label
          htmlFor="my-drawer"
          className="btn w-24 flex justify-center btn-primary md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>

        <h1 className="text-2xl font-bold text-primary">Dashboard Here</h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <label
            htmlFor="my-drawer"
            className="btn w-24 flex justify-center btn-ghost md:hidden"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/manageorders">All Orders</Link>
            <Link to="/dashboard/addproduct"> + Add Product</Link>
            <Link to="/dashboard/manageproduct">All Products</Link>
            <Link to="/dashboard/addreview"> + Add Review</Link>
            <Link to="/dashboard/managereviews">All Reviews</Link>
            <Link to="/dashboard/users">Users</Link>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;
