"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CustomerFeedback = () => {
  return (
    <div className="items-center gap-20 px-4 mx-auto my-12 md:flex md:my-24 max-w-7xl">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold md:text-5xl">
          Customer <span className="text-[#AD1519]">Feedback</span>
        </h1>
        <div
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-delay="200"
        >
          <p className="text-2xl text-[#3D3D3D] pt-4 text-justify">
            I recently dined at your restaurant and wanted to share my
            experience. The food was absolutely delicious, and I was impressed
            by the freshness of the ingredients. Each dish was bursting with
            flavor, and the portion sizes were perfect. The service was quick
            and efficient, and the staff was incredibly friendly and welcoming.
          </p>
          <div className="mt-8">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex items-center gap-4">
                  <img
                    src="/Images/man1.jpg"
                    height={100}
                    width={100}
                    alt="man image coming soon"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-[#A52A2A]">
                      Tayyab Sohail
                    </h1>
                    <p className="text-lg font-medium">UX/UI Designer</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-4">
                  <img
                    src="/Images/man2.png"
                    height={100}
                    width={100}
                    alt="man image coming soon"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-[#A52A2A]">
                      Nafiz Salim
                    </h1>
                    <p className="text-lg font-medium">Graphic Designer</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-4">
                  <img
                    src="/Images/man1.jpg"
                    height={100}
                    width={100}
                    alt="man image coming soon"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-[#A52A2A]">
                      Tayyab Iqbal
                    </h1>
                    <p className="text-lg font-medium">Developer</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        data-aos-delay="200"
        className="relative mt-8 md:mt-0 h-[300px] md:h-[500px] w-full md:w-[800px]"
      >
        <div
          className="absolute bottom-0 left-0 h-[250px] md:h-[350px] w-full transform rotate-90"
          style={{
            background: "#A52A2A",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        ></div>

        <Image
          src="/Images/happy shef.png"
          alt="Banner image coming soon..."
          width={500}
          height={500}
          className="relative object-cover w-full md:w-[500px] h-full"
        />
      </div>
    </div>
  );
};

export default CustomerFeedback;
