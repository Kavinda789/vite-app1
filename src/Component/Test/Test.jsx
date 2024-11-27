import React from "react";
import { assets } from "../../assets/assets";

function Test() {
  return (
    <div>
      <header>
        <h1 className="capitalize p-6">Welcome to My Homepage</h1>
      </header>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <main className="bg-gray-200 rounded overflow-hidden">
        <div className="bg-white w-[150px] shadow-xl">
          <img src={assets.Banner} alt="" />
        </div>
        <h2>About Me</h2>
        <p>
          This is a brief introduction about me or the website. Feel free to
          explore!
        </p>
      </main>
      <button className="text-pink-500 w-[150px] bg-red-200 py-6 ">
        Button
      </button>

      <div class="grid grid-cols-3 divide-x-2 divide-green-500">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Test;
