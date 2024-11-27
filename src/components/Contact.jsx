import Aos from "aos";
import React, { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in" });
  });

  return (
    <section className="pt-16" id="contact">
      <div>
        <h1
          className="font-bold text-lg md:text-xl inline border-b-2 border-[#C8CACD] ml-14 md:ml-20"
          data-aos="fade-up"
        >
          Contact me
        </h1>
        <p className="ml-14 md:ml-20 mt-2 text-sm md:text-base" data-aos="fade-up">
          Send me a message💬
        </p>
        <form
          method="POST"
          action="https://getform.io/f/9927400a-d3d7-4b85-821e-645a69375849"
          className="flex flex-col container mx-auto w-[70%] md:w-[50%] space-y-5 py-6"
          data-aos="zoom-in"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="form-input"
          ></textarea>
          <div className="mx-auto pt-2">
            <button className="bg-[#3366CC] ease-in-out duration-700 hover:bg-[#819096] text-white p-2 rounded w-36 md:w-48 mx-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
