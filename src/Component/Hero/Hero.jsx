import React from "react";
import Img1 from "../../assets/carosal1.png";
import Img2 from "../../assets/carosal2.png";
import Img3 from "../../assets/carosal3.png";
import Slider from "react-slick";

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};
function Hero() {
  const ImageList = [
    {
      id: 1,
      title: "Upto 50% off on all Men's Wear",
      img_link: Img1,
      desc: "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Upto 30% off on all Women's Wear",
      img_link: Img2,
      desc: "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "70% off on all Products Sale",
      img_link: Img3,
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div
      className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flax justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200"
    >
      <div
        className="h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center gap-4 sm:pt-0
                 text-center sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="fade up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.desc}
                  </p>
                  <div
                    data-aos="fade up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  > 
                    <button
                      className="bg-gradient-to-r from-primary
                  to-secondary hover:scale-105 duration-200 text-white
                  py-2 px-2 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div>
                    <img
                      src={data.img_link}
                      alt=""
                      className="w-[500px] h-[500px] sm:h-[450px]
                        sm:w-[450x] sm:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
