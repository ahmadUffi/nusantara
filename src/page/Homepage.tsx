import React from "react";
import { Navbar } from "../components/Navbar";
import ThreeDButton from "../components/Button";
import image from "../assets/herobg.png";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="hero grid lg:grid-cols-2 lg:px-35 items-center justify-center px-10 py-30  z-10 h-[100dvh] ">
        <div className="text flex flex-col gap-1.5 relative z-50 lg:order-1 order-2">
          <h1 className="lg:text-4xl md:text-3xl text-xl font-bold capitalize lg:leading-13 md:leading-10 leading-6.5">
            <span className="text-blue-500"> Welcome </span>to our website!{" "}
            <br /> Mari Jelajahi{" "}
            <span className="text-green-500"> Keindahan Nusantara</span>
          </h1>
          <p className="line-clamp-3 w-[80%] md:text-[14] text-[12px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            amet. Inventore beatae, iste similique deserunt nisi totam adipisci
            vel dignissimos error eaque quasi, tenetur harum.
          </p>
          <ThreeDButton className="mt-7">Let's Start</ThreeDButton>
        </div>
        <div className="order-1 lg:order-2 img relative z-50 flex justify-center items-center">
          <img
            src={image}
            alt=""
            className="md:w-[500px] w-[400px] relative z-20"
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
