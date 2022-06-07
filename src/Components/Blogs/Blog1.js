import React from "react";

const Blog1 = () => {
  return (
    <section>
      <div className="break-inside-avoid p-8 mb-6  rounded-lg bg-slate-100">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            Users demand more from their programs than from their food now that
            we live in the Internet era. Users want everything, especially the
            digital experience, to be provided promptly, and a slow-performing
            software may kill the buzz. The issue can be effectively addressed
            with React Native performance. The underlying how, though, remains.
            We’ll respond to the same question briefly. React Native has
            radically transformed the lives and working capacities of frontend
            developers since its introduction. React may be used to create a
            more intuitive user interface than ever before. As a consequence,
            frontend developers may create a beautiful and functional online
            application. You must use the appropriate solutions to optimize the
            performance of your React Native project. However, we must first
            understand frequent obstacles in order to develop a high-performing
            application.{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn">Click for More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog1;
