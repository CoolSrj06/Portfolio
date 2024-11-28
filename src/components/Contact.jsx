import Aos from "aos";
import React, { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    // Initialize animations
    Aos.init({ duration: 1000, easing: "ease-in" });

    // Dynamically load the HubSpot form script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48341809",
          formId: "0569c51b-4e0f-491f-8885-438785c40bf5",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <div
          id="hubspotForm"
          className="flex flex-col container mx-auto w-[70%] md:w-[50%] space-y-5 py-6"
          data-aos="zoom-in"
        ></div>
      </div>
    </section>
  );
};
