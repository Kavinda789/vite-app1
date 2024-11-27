import React from "react";
import { item_list } from "../../assets/assets";
import { FaStar } from "react-icons/fa6";

function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div
          className="text-center mb-10 max-w-[600px]
        mx-auto"
        >
          <p data-aos="fade up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div>
          <div
            className="grid grid-cols-1
            sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5"
          >
            {item_list.map((data) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={data.aosDelay}
                key={data._id}
                className="space-y-3"
              >
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-[150px] object-cover
                            rounded-md"
                />
                <h1 className="font-semibold">{data.name}</h1>
                <p className="text-sm to-gray-600">{data.category}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span> 4.5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-primary hover:scale-105 duration-300
                text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                group-hover:to-primary"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
