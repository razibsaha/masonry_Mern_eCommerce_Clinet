import React from "react";

const Blog3 = () => {
  return (
    <section>
      <div className="break-inside-avoid p-8 mb-6 bg-slate-100 rounded-lg">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          How does prototypical inheritance work?
          </h2>
          <p>
          A class is like a blueprint. It’s the specification of an object that describes how it will be and behave. Imagine an assembly line in a factory; Each piece built was previously designed using a drawing tool. That design gives the machines the details on how to compose each object. The design is not an actual representation; it is an abstraction of the structure of the object. The same goes for classes in programming languages; they are the object’s abstraction, and an object is a virtual form analogous to a real-world object.
          </p>
          <div className="card-actions justify-end">
            <button className="btn">Click for More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog3;
