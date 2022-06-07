import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Portfolio from "./Components/Portfolio/Portfolio";
import ProductDetails from "./Components/Product/ProductDetails";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/Login/RequireAuth";
import NotFound from "./Components/NotFound.js/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageOrders from "./Components/Dashboard/ManageOrders";
import AddReview from "./Components/Dashboard/AddReview";
import AddProduct from "./Components/Dashboard/AddProduct";
import ProductsManage from "./Components/Dashboard/ProductsManage";
import ReviewManagement from "./Components/Dashboard/ReviewManagement";
import MyProfile from "./Components/Dashboard/MyProfile";
import Users from "./Components/Dashboard/Users";
import MyOrders from "./Components/Dashboard/MyOrders";
import Flower from "./Components/Home/Flower";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>

        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>

        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="manageorders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route
            path="managereviews"
            element={<ReviewManagement></ReviewManagement>}
          ></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageproduct"
            element={<ProductsManage></ProductsManage>}
          ></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="flower" element={<Flower></Flower>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
