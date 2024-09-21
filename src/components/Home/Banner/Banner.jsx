"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Banner = () => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/Images/banner1.png");
  const [animateImage, setAnimateImage] = useState(false);

  const fullText = `
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
`;

  const getFirst50Words = (text) =>
    text.split(" ").slice(0, 50).join(" ") + " ...";

  const images = [
    "/Images/banner1.png",
    "/Images/banner2.png",
    "/Images/banner3.png",
    "/Images/banner4.png",
  ];

  const handleClick = (imgSrc) => {
    setAnimateImage(false);
    setTimeout(() => {
      setSelectedImage(imgSrc);
      setAnimateImage(true);
    }, 300);
  };

  return (
    <div className="px-6 py-16 text-white md:px-10 ">
      <div className="gap-24 md:flex">
        <div className="md:w-1/2">
          <h1 className="pb-2 text-4xl md:text-6xl">Breakfast</h1>
          <p className="font-bold">
            {isFullTextVisible ? fullText : getFirst50Words(fullText)}
            <button
              onClick={() => setIsFullTextVisible(!isFullTextVisible)}
              className="text-blue-500 underline"
            >
              {isFullTextVisible ? "See Less" : "See More"}
            </button>
          </p>
          <div className="items-center hidden gap-4 md:flex">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleClick(imgSrc)}
              >
                <img
                  className={`w-36 h-36 ${
                    selectedImage === imgSrc ? "border-b-4 border-white" : ""
                  }`}
                  src={imgSrc}
                  alt={`Breakfast item ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="items-center justify-center hidden sm:block md:block">
            <input
              className="w-full py-3 pl-8 mt-12 text-black rounded-full"
              placeholder="Search..."
              type="search"
              name="text"
              id=""
            />
            <IoSearchSharp className="relative ml-3 text-black -top-7"></IoSearchSharp>
          </div>
        </div>

        <div className="relative md:w-1/2">
          {selectedImage && (
            <div
              className={`absolute transition-all duration-700 ease-in-out right-0 top-0 transform ${
                animateImage
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={500}
                height={500}
                className="block"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
