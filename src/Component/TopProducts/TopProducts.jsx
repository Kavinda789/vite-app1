import React from "react";
import { FaStar } from "react-icons/fa6";
import { shirt_list } from "../../assets/assets";

function TopProducts() {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-20 max-w-[600px]">
          <p data-aos="fade up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade up" className="text-3xl font-bold ">
            Best Products
          </h1>
          <p data-aos="fade up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-20 md:gap-5 place-items-center"
        >
          {shirt_list.map((data) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={data.aosDelay}
              className="rounded-2xl bg-white dark:bg-gray-800
              hover:bg-black/80 dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.image}
                  className="max-w-[140px] block
                mx-auto transform -translate-y-20 group-hover:scale-105
                duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div
                  className="w-full flex  items-center justify-center
                gap-1"
                >
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xs font-bold ">{data.name}</h1>
                <p
                  className="to-gray-500 group-hover:text-white duration-300
                text-sm line-clamp-2"
                >
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300
                text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
