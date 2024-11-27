import Aos from "aos";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";

export const HomeSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in",
    });
  });

  const Animated_Image =
    "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0";

  return (
    <section className="pt-12 md:pt-20" data-aos="fade-up" id='home'>
      <div className="flex-col space-y-10 md:flex md:flex-row  justify-around items-center">
        <div className="text-center md:text-right">
          <p className="text-base md:text-lg">Hi, I am </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Srijan Maurya
          </h2>
          <TypeAnimation
            sequence={["FullStack Developer", 1000, "", 1000]}
            repeat={Infinity}
            className="text-base md:text-lg"
          />
        </div>
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={Animated_Image}
            alt="animated-image"
            className="rounded-full h-72 md:h-96 object-contain shadow"
          />
        </div>
      </div>
    </section>
  );
};
