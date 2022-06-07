import React from "react";
import { useForm } from "react-hook-form";

import "./ContactBanner.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ContactBanner = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = async (data) => {
        await sleep(2000);
        if (data.username === "bill") {
          alert(JSON.stringify(data));
        } else {
          alert("There is an error");
        }
      };
    
      console.log(errors);
  return (
    <section
      id="treatment"
      className="container-fluid mx-auto mail-bg px-12 mt-32 mb-20 flex justify-center items-center py-12"
    >
      <div className="flex-col justify-center items-center py-24 container px-12">
        <p className="text-2xl text-white font-bold text-center">Contact</p>
        <h1 className="text-[36px] uppercase text-yellow-400 font-bold text-center leading-tight">
          Stay connected with us
        </h1>
        <div className="flex flex-col justify-center items-center ">
        <form className="mt-5 md:w-[550px] w-full" onSubmit={handleSubmit(onSubmit)}>
          <input 
          className="input w-full rounded-md p-4"
          placeholder="Email" {...register("email")} />
          

          
          <input 
           className="input w-full rounded-md p-4"
           placeholder="Subject" {...register("subject")} />

          
          <textarea
          className="input w-full h-36 rounded-md p-4"
            placeholder="Your message"
            type="Message"
            {...register("email")}
          />

          <div style={{ color: "red" }}>
            {Object.keys(errors).length > 0 &&
              "There are errors, check your console."}
          </div>
          <div className="flex justify-center items-center mt-2">
          <button className="btn btn-warning w-full">Submit</button>
        </div>
        </form>
        </div>
        
      </div>
    </section>
  );
};

export default ContactBanner;
