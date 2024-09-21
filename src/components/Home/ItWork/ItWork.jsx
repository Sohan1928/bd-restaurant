"use client";
import React from "react";

const ItWork = () => {
  return (
    <div className="items-center px-4 mx-auto mb-24 mt-[410px] md:mt-[390px] max-w-7xl">
      <div>
        <h1 className="mb-14 text-3xl font-bold text-center mx-auto text-[#2D2D2D] md:text-6xl">
          How does it work
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-auto text-center md:gap-6 md:grid-cols-4">
        <div className="px-2 py-4 border shadow-lg md:px-6 rounded-2xl">
          <img
            className="md:w-[100px] h-[60px] w-[60px] md:h-[100px] mx-auto"
            src="/Images/badge.png"
            alt="badge image"
          />
          <h1 className="pt-6 font-semibold md:text-3xl">Quality Food</h1>
          <p className="py-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="hover:text-[#F03328] md:text-xl font-bold">
            Learn More
          </button>
        </div>
        {/* <a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">Rocket icons created by Freepik - Flaticon</a> */}
        <div className="px-2 py-4 border shadow-lg md:px-6 rounded-2xl">
          <img
            className="md:w-[100px] h-[60px] w-[60px] md:h-[100px] mx-auto"
            src="/Images/rocket.png"
            alt="rocket image"
          />
          <h1 className="pt-6 font-semibold md:text-3xl">Quality Food</h1>
          <p className="py-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="hover:text-[#F03328] md:text-xl font-bold">
            Learn More
          </button>
        </div>
        <div className="px-2 py-4 border shadow-lg md:px-6 rounded-2xl">
          <img
            className="md:w-[100px] h-[60px] w-[60px] md:h-[100px] mx-auto"
            src="/Images/debit-card.png"
            alt="debit card image"
          />
          <h1 className="pt-6 font-semibold md:text-3xl">Quality Food</h1>
          <p className="py-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="hover:text-[#F03328] md:text-xl font-bold">
            Learn More
          </button>
        </div>
        <div className="px-2 py-4 border shadow-lg md:px-6 rounded-2xl">
          <img
            className="md:w-[100px] h-[60px] w-[60px] md:h-[100px] mx-auto"
            src="/Images/order.png"
            alt="order image"
          />
          <h1 className="pt-6 font-semibold md:text-3xl">Quality Food</h1>
          <p className="py-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="hover:text-[#F03328] md:text-xl font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItWork;
