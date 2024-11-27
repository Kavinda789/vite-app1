import React from "react";
import { assets } from "../../assets/assets";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div
      className="min-h-[550px] flex
    justify-center items-center sm:py-0"
    >
      <div className="container">
        <div
          className="grid grid-cols-1
        sm:grid-cols-2 gap-6 items-center"
        >
          <div data-aos="zoom-in">
            <img
              src={assets.Banner}
              alt=""
              className="max-w-[400px]
                h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                object-cover"
            />
          </div>

          <div data-aos="zoom-in"
              data-aos-delay="50" className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos-delay="0" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-sm to-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div data-aos="zoom-in"
              data-aos-delay="400" className="flex items-center gap-4">
              <GrSecure
                className="text-4xl h-12 w-12 shadow-sm p-4 
                rounded-full bg-violet-100 dark:bg-violet-400"
              />
              <p>Quality Products</p>
            </div>

            <div data-aos="zoom-in"
              data-aos-delay="600" className="flex items-center gap-4">
              <IoFastFood
                className="text-4xl h-12 w-12 shadow-sm p-4 
                rounded-full bg-orange-100 dark:bg-orange-400"
              />
              <p>Fast Delivery</p>
            </div>

            <div data-aos="zoom-in"
              data-aos-delay="800" className="flex items-center gap-4">
              <GiFoodTruck
                className="text-4xl h-12 w-12 shadow-sm p-4 
                rounded-full bg-green-100 dark:bg-green-400"
              />
              <p>Easy Payment method</p>
            </div>

            <div data-aos="zoom-in"
              data-aos-delay="1000" className="flex items-center gap-4">
              <GiFoodTruck
                className="text-4xl h-12 w-12 shadow-sm p-4 
                rounded-full bg-yellow-100 dark:bg-yellow-400"
              />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
