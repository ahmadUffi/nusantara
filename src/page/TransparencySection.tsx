import React from "react";
import exploreImg from "../assets/eksplore.jpeg";

const TransparencySection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:px-20 px-5 mt-40">
      <div className="relative bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 uppercase">
            Transparan dan
            <br />
            Terpercaya
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            corrupti dolorem optio officia perspiciatis, necessitatibus tempora
            explicabo possimus natus nemo et nulla molestiae maxime in illum
            repellendus iusto, cupiditate facilis atque eaque ad! Enim
            voluptatibus eaque autem eligendi quibusdam facilis velit ut ea
            vitae? Perferendis debitis vel reiciendis iure nemo!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
              Pesan Sekarang
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold px-6 py-2 rounded-lg">
              Transparasi Docs
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg w-64 h-64 bg-white flex items-center justify-center ">
            <img
              src={exploreImg}
              alt="gambar"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-blue-600 rounded-2xl z-0" />
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
