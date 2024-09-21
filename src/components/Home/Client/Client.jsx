import React from "react";
import Marquee from "react-fast-marquee";

const Client = () => {
  return (
    <div className="items-center px-4 mx-auto mb-16 max-w-7xl">
      <div className="text-center text-xl text-[#A52A2A]">
        <h3>Partners & Clients</h3>
        <h1 className="text-3xl md:text-5xl mt-2 font-bold text-[#333333]">
          We work with the best people
        </h1>
      </div>
      <div className="mt-14">
        <Marquee
          direction="right"
          speed={100}
          pauseOnHover="true"
          className="flex items-center"
        >
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/cutlery.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/bistro.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/cafe.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/restaurant.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/bell.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/cup.png"
            alt="cutlery"
          />
          <img
            className="pr-16 h-[100px] md:h-[150px] w-[130px] md:w-[180px]"
            src="/Images/bakery.png"
            alt="cutlery"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Client;
