import React from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";
import Blog6 from "./Blog6";

const Blogs = () => {
  return (
    <section className="container mx-auto px-12">
      <h1 className="text-center text-8xl font-bold text-red-500 px-5">
        Blogs
      </h1>
      <h1 className="text-center text-5xl font-regular text-yellow-500 mt-5 mb-12">
        Answers to the most asked questions
      </h1>
      <div className="columns-1 2xl:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
        <Blog1></Blog1>
        <Blog2></Blog2>
        <Blog3></Blog3>
        <Blog4></Blog4>
        <Blog5></Blog5>
        <Blog6></Blog6>
      </div>
    </section>
  );
};
export default Blogs;
