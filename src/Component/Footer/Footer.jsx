import React from "react";
import { assets, Menu } from "../../assets/assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileRetro,
} from "react-icons/fa6";

const FooterImg = {
  backgroundImage: `url(${assets.footerImg})`,
  backgroundPosition: "bootom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Footer() {
  return (
    <div style={FooterImg} className=" text-white">
      <div data-aos="zoom-in" className="container">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left text-justify
             mb-3 flex items-center gap-3"
            >
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl font-bold sm:text-left
                    text-justify mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {Menu.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-white"
                      key={data.id}
                    >
                      <span>{data.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* links */}
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl font-bold sm:text-left
                    text-justify mb-3"
                >
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {Menu.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-white"
                      key={data.id}
                    >
                      <span>{data.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social meadia */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div className="py-8 px-4 col-span-4 sm:col-auto">
                <div>
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida , Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <FaMobileRetro />
                    <p>+91 1234567890</p>
                  </div>
                </div>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                  <a href="#">
                    <FaFacebook
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedin
                      className="text-3xl hover:text-primary
                        duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
