import React from "react";

const Blog2 = () => {
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
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            React gives developers complete freedom over how state is managed
            within a component. React has two types of components: class
            components and functional components, which were introduced in React
            v16. Class components use methods to manage state, such as
            this.state and this.setState for state, and componentDidMount() for
            running a side effect once a component has mounted. If interested,
            you can read more about these methods. However, since most React
            developers now use React functional components, we’ll be focusing on
            functional components and their state, which is managed using React
            hooks. In this article, we’ll be taking a look at some best
            practices that I’ve found for managing state within functional
            components — and truly taking advantage of the React hooks API.
          </p>
          <div className="card-actions justify-end">
            <button className="btn">Click for More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog2;
