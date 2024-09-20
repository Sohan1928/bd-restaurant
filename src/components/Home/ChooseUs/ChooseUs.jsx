import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";

const ChooseUs = () => {
  return (
    <div className="mx-auto my-24 mt-24 gap-36 md:flex max-w-7xl">
      <div>
        <Image
          className="bg-[#EFCBE2] rounded-3xl my-8"
          src="/Images/choose img.png"
          alt="Choose us image coming soon..."
          height={500}
          width={500}
        ></Image>
      </div>
      <div>
        <div>
          <h1 className="text-5xl font-bold text-[#2D2D2D]">
            Why People Choose us?
          </h1>
          <div>
            <div className="flex items-center gap-4 px-4 py-2 shadow-md mt-9 rounded-2xl">
              <span>
                <TbTruckDelivery className="text-6xl text-[#FF9E0C] p-2 rounded-full shadow-md"></TbTruckDelivery>
              </span>
              <span>
                <h3 className="text-3xl font-semibold">
                  Convenient and Reliable
                </h3>
                <p className="text-[#404040] text-justify">
                  Whether you dine in, take out, or order delivery, our service
                  is convenient, fast, and reliable, making mealtime
                  hassle-free.
                </p>
              </span>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 shadow-md mt-9 rounded-2xl">
              <span>
                <BiFoodMenu className="text-6xl text-[#FF9E0C] p-2 rounded-full shadow-md"></BiFoodMenu>
              </span>
              <span>
                <h3 className="text-3xl font-semibold">Variety of Options</h3>
                <p className="text-[#404040] text-justify">
                  From hearty meals to light snacks, we offer a wide range of
                  options to suit every taste and craving.
                </p>
              </span>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 shadow-md mt-9 rounded-2xl">
              <span>
                <GiHamburger className="text-6xl text-[#FF9E0C] p-2 rounded-full shadow-md"></GiHamburger>
              </span>
              <span>
                <h3 className="text-3xl font-semibold">
                  Convenient and Reliable
                </h3>
                <p className="text-[#404040] text-justify">
                  Whether you dine in, take out, or order delivery, our service
                  is convenient, fast, and reliable, making mealtime
                  hassle-free.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
