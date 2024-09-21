import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 footer bg-[#880808] py-24 text-white">
        <form>
          <h3 className="text-2xl font-bold text-white footer-title">
            Restaurant
          </h3>
          <fieldset className="form-control">
            <label className="label">
              <span className="text-white label-text">
                Subscribe our newsletter and get discount 25%off
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#A52A2A] join-item">
                <PiTelegramLogo></PiTelegramLogo>
              </button>
            </div>
            <div className="flex items-center gap-4 mt-3 text-xl">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaYoutube></FaYoutube>
              <FaInstagram></FaInstagram>
            </div>
          </fieldset>
        </form>
        <nav>
          <h6 className="footer-title">Contact us</h6>
          <a className="flex items-center gap-2 link link-hover">
            <CiLocationOn className="text-xl "></CiLocationOn>
            3517 W. Gray St. Utica, Pennsylvania 57867
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaPhone className="text-xl"></FaPhone>(480) 555-0103
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <BiMessageAltDetail className="text-xl"></BiMessageAltDetail>
            M.Alyaqout@4house.Co
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <IoMdTime className="text-xl"></IoMdTime>Sun - Sat / 10:00 AM - 8:00
            PM
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <div>
          <h6 className="footer-title">Instagram Gallery</h6>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            <img
              className="w-[108px] h-[108px]"
              src="/Images/1.png"
              alt="Instagram Picture"
            />
            <img
              className="w-[108px] h-[108px]"
              src="/Images/2.png"
              alt="Instagram Picture"
            />
            <img
              className="w-[108px] h-[108px]"
              src="/Images/3.png"
              alt="Instagram Picture"
            />
            <img
              className="w-[108px] h-[108px]"
              src="/Images/4.png"
              alt="Instagram Picture"
            />
            <img
              className="w-[108px] h-[108px]"
              src="/Images/5.png"
              alt="Instagram Picture"
            />
            <img
              className="w-[108px] h-[108px]"
              src="/Images/6.png"
              alt="Instagram Picture"
            />
          </div>
        </div>
      </footer>
      <footer className="items-center p-4 footer bg-[#A52A2A] text-neutral-content justify-around">
        <div>
          <h5>Copyright © 2024. All rights reserved</h5>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center">
          <a>Privacy Policy</a>
          <a>Term of Use</a>
          <a>Partner</a>
        </div>
        {/* <nav className="grid-flow-col gap-4 md:place-self-center">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav> */}
      </footer>
    </div>
  );
};

export default Footer;
