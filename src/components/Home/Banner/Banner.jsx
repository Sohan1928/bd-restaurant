import Image from "next/image";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="px-6 py-16 text-white md:px-10 ">
      <div className="gap-24 md:flex">
        <div className="md:w-1/2">
          <h1 className="pb-4 text-4xl md:text-6xl">Breakfast</h1>
          <p>
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
          </p>
          <div className="hidden sm:block md:block">
            <input
              className="w-full py-2 pl-8 mt-12 text-black rounded-full"
              placeholder="Search..."
              type="search"
              name="text"
              id=""
            />
            <IoSearchSharp className="relative ml-2 text-black -top-7"></IoSearchSharp>
          </div>
        </div>
        <div>
          <Image
            src="/images/banner1.png"
            alt="Banner image coming soon..."
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
