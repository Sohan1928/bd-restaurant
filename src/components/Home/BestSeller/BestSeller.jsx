"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const BestSeller = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/seller.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="px-2 mx-auto my-12 md:my-24 max-w-7xl">
      <div>
        <h1 className="text-[#1F1F1F] text-3xl md:text-5xl font-bold text-center">
          Our best Seller Dishes
        </h1>
        <p className=" text-[#5C5C5C] md:text-2xl text-center mt-5 mx-auto">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomato all tossed in your choice of
          dressing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-16 md:gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div className="mb-3 md:mb-8" key={item.id} item={item}>
            <img
              className="h-36 w-full md:h-[297px] md:w-[417px]"
              src={item.image}
              alt={item.title}
            />
            <div className="py-4 border border-t-0 shadow-lg md:px-2 rounded-b-xl">
              <div className="flex items-center justify-between pl-2 mt-4 md:pl-6">
                <h1 className="text-xs font-medium md:text-3xl">
                  {item.title}
                </h1>
                <button className="md:pr-4 bg-[#F03328] px-2 md:px-6 py-2 rounded-full text-white text-xs md:text-xl md:font-medium">
                  {item.button}
                </button>
              </div>
              <div className="flex items-center justify-between pl-2 mt-4 md:pl-6">
                <span className="flex items-center text-xs md:gap-1 md:text-xl text-[#FF9E0C]">
                  <MdOutlineStarPurple500></MdOutlineStarPurple500>
                  <MdOutlineStarPurple500></MdOutlineStarPurple500>
                  <MdOutlineStarPurple500></MdOutlineStarPurple500>
                  <MdOutlineStarPurple500></MdOutlineStarPurple500>
                  <MdOutlineStarPurple500></MdOutlineStarPurple500>
                </span>
                <p className="pr-2 font-bold md:text-4xl md:pr-4">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
