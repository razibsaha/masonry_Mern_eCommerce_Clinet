import React from "react";

const Blog4 = () => {
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
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h2>
          <p>
            As a JavaScript library, React has access to a wide range of array
            handling capabilities. Array manipulation is simplified, but since
            state is immutable, specific methods are required when using React
            hooks. As a recap, because the state is immutable, we are unable to
            simply add a new value to the array in the same way that we would
            ordinarily do with regular JavaScript. Instead, we must make use of
            the setter function, which is returned by the call to useState, as
            well as the JavaScript spread operator or similar operators. To be
            more specific, we must return a new state that is based on the
            existing state and the new value. In order to do this, the setter
            method accepts a callback function that takes as an argument the
            current state.
          </p>
          <div className="card-actions justify-end">
            <button className="btn">Click for More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog4;
