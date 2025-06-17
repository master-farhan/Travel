import React, { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(150);

  return (
    <div className="h-full">
      <div className="px-5 sm:px-10 lg:px-30 h-full flex justify-center items-center bg-primary/10">
        <div className="grid grid-cols-1 gap-4 relative">
          {/* Text Content Section */}
          <div className="text-white">
            <p data-aos="fade-up">Our Packeges</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          {/* Form Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 text-gray-600 gap-3 sm:gap-5">
              <div className="">
                <label className="opacity-70" htmlFor="destination">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-gray-200 outline-1 rounded-full p-2 px-4 border-none"
                />
              </div>
              <div className="">
                <label className="opacity-70" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-gray-200 outline-1 rounded-full p-2 px-4 border-none"
                />
              </div>
              <div className="">
                <label className="opacity-70 block" htmlFor="destination">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <input
                  type="range"
                  name="destination"
                  id="destination"
                  className="w-full appearance-none bg-gradient-to-r from-primary to-secondary rounded-full h-2 my-2 sm:my-4 border-none"
                  min="150"
                  max="1000"
                  value={priceValue}
                  step="10"
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
          </div>{" "}
          {/* Button */}
          <button
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-gradient-to-r z-10 from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer font-medium whitespace-nowrap absolute -translate-x-1/2 -bottom-5 left-1/2"
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
