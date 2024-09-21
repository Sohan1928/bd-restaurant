import React from "react";

const TeamMember = () => {
  return (
    <div className="items-center px-2 mx-auto my-12 md:my-24 md:w-[1920px] h-[398px]">
      <div className="bg-[#AD1519D9] relative  mx-auto text-center">
        <img
          className="absolute top-[50px] transform left-1/2 -translate-x-16 md:-translate-x-28 h-[120px] md:h-[200px] w-[120px] md:w-[200px] opacity-40 z-0"
          src="/Images/blog2.jpg"
          alt=""
        />
        <div className="relative z-10 pb-40 pt-28">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Team Member
          </h1>
          <p className="md:w-[418px] mx-auto text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
      </div>
      <div className="grid px-4 md:px-[300px] items-center grid-cols-2 gap-4 md:gap-8 mx-auto text-center md:grid-cols-4">
        <div className="pb-2 transform -translate-y-32 shadow-lg">
          <img
            className=""
            src="/Images/male-chef.png"
            alt="man image coming soon"
          />
          <span className="py-2">
            <h3 className="font-bold md:text-xl">Mark Henry</h3>
            <p>Owner</p>
          </span>
        </div>
        <div className="pb-2 transform -translate-y-32 shadow-lg">
          <img
            className=""
            src="/Images/male-chef.png"
            alt="man image coming soon"
          />
          <span className="py-2">
            <h3 className="font-bold md:text-xl">Lucky Helen</h3>
            <p>Chef</p>
          </span>
        </div>
        <div className="pb-2 transform -translate-y-32 shadow-lg">
          <img
            className=""
            src="/Images/male-chef.png"
            alt="man image coming soon"
          />
          <span className="">
            <h3 className="font-bold md:text-xl">Moon Henry</h3>
            <p>Founder</p>
          </span>
        </div>
        <div className="pb-2 transform -translate-y-32 shadow-lg">
          <img
            className=""
            src="/Images/male-chef.png"
            alt="man image coming soon"
          />
          <span className="py-2">
            <h3 className="font-bold md:text-xl">Tom Monrow</h3>
            <p>Specialist</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
