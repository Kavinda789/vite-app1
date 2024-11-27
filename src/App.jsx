import React, { useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Products from "./Component/Products/Products";
import TopProducts from "./Component/TopProducts/TopProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Component/Banner/Banner";
import Subscribe from "./Component/Subscribe/Subscribe";
import Test from "./Component/Test/Test";
import Testimonials from "./Component/Testimonials/Testimonials";
import Footer from "./Component/Footer/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials/>
      <Footer/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
