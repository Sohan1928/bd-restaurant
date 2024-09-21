"use client";
import React, { useEffect, useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="items-center px-4 mx-auto mb-20 max-w-7xl">
      <div className="mx-auto text-center">
        <h1 className="text-3xl text-[#333333] font-bold md:text-5xl">
          Latest news & Blog
        </h1>
        <p className="text-[#828282] pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
      </div>

      <div className="grid gap-6 md:mt-14 md:grid-cols-3 ">
        {blogs.map((blog) => (
          <div className="p-4 rounded-lg shadow-lg" key={blog.id} blog={blog}>
            <img
              className="md:h-[313px] md:w-[392px]"
              src="/Images/blog2.jpg"
              alt=""
            />

            <div className="flex items-center gap-2 my-4 md:gap-4">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#A52A2A] text-xl">
                  <IoCalendarNumberOutline></IoCalendarNumberOutline>
                </span>
                <h5 className="text-[#333333]">22 Jan 2022</h5>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#A52A2A] text-xl">
                  <TbMessages></TbMessages>
                </span>
                <h5 className="text-[#333333]">Comments (03)</h5>
              </div>
            </div>

            <div>
              <h1 className="md:text-xl font-bold text-[#333333]">
                {blog.title}
              </h1>
              <p className="text-[#4F4F4F] mt-2 mb-4">{blog.description}</p>
              <button className="flex items-center gap-2 hover:text-[#fd3838]">
                {blog.button}
                <IoIosArrowRoundForward className="text-2xl items-center text-[#4F4F4F]"></IoIosArrowRoundForward>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
