import React from "react";
import { IoPlayOutline } from "react-icons/io5";

const GetStarted = () => {
  return (
    <div className="justify-between px-4 mx-auto mt-12 md:mt-24 start gap-36 md:flex max-w-7xl">
      <div className="md:w-1/2">
        <div>
          <h1 className="font-semibold text-[#A52A2A] uppercase">
            Pizza Delivery
          </h1>
          <h1 className="pt-2 text-3xl font-semibold md:text-6xl">
            Get Started Today!
          </h1>
          <div className="border-t-[5px] w-24 md:w-36 mt-4 border-[#A52A2A]"></div>
          <p className="mt-2 text-xl font-semibold text-justify md:text-2xl">
            Everything you need to build an amazing food restaurant responsive
            website.
          </p>
          <p className="pt-4 text-justify">
            Hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis.
          </p>
          <div className="flex gap-4 mt-10 text-justify md:gap-8">
            <div className="px-2 py-3 rounded-lg shadow-lg md:px-4">
              <svg
                className="items-center w-16 mx-auto md:w-24 md:h-24"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.2478 13.9588C48.5055 13.9577 48.5055 13.9577 48.7685 13.9565C49.1296 13.956 49.4907 13.9574 49.8518 13.9607C50.4009 13.9649 50.9496 13.9607 51.4987 13.9557C51.8514 13.9562 52.2042 13.9572 52.5569 13.9588C52.7191 13.9572 52.8813 13.9556 53.0484 13.954C54.3788 13.9751 55.4071 14.3428 56.4067 15.2344C56.5119 15.3633 56.6172 15.4922 56.7256 15.625C56.8338 15.7539 56.9421 15.8828 57.0536 16.0157C58.1455 17.5265 57.9651 19.135 57.6915 20.8916C57.5856 21.5417 57.4732 22.1905 57.3604 22.8394C57.3044 23.1736 57.2487 23.5079 57.1933 23.8423C56.7891 26.2498 56.7891 26.2498 56.5547 26.9532C56.8037 26.9756 57.0527 26.998 57.3092 27.0211C58.3322 27.135 59.3073 27.3662 60.3022 27.6245C60.4708 27.667 60.6394 27.7094 60.813 27.7531C61.685 27.9753 62.541 28.2167 63.3906 28.5157C63.1191 29.263 62.7646 29.9366 62.3802 30.6294C60.0415 34.868 59.5024 39.3405 60.8203 44.0071C61.138 45.0158 61.5295 45.9411 62.0234 46.875C62.1194 47.0631 62.2153 47.2512 62.3141 47.445C64.3911 51.2768 68.0399 54.0825 72.1919 55.3589C77.2572 56.6224 81.8043 55.8984 86.3007 53.3063C86.723 53.0758 87.1573 52.8976 87.6094 52.7344C89.2195 58.0965 89.7578 63.1377 89.7578 68.75C63.9121 68.75 38.0664 68.75 11.4375 68.75C11.4375 60.4014 11.4375 60.4014 12.0234 57.8125C12.0602 57.6422 12.0969 57.4718 12.1347 57.2962C14.3606 47.1923 20.4449 38.3432 29.1011 32.6783C33.81 29.6721 38.8205 27.9828 44.25 26.7578C44.1968 26.4537 44.1968 26.4537 44.1424 26.1434C44.0097 25.3829 43.8792 24.622 43.7493 23.8611C43.6931 23.5333 43.6362 23.2056 43.5788 22.878C42.6752 17.7174 42.6752 17.7174 43.909 15.8379C45.0547 14.3674 46.4311 13.9411 48.2478 13.9588ZM32.2383 38.4278C32.1026 38.5239 31.9668 38.6201 31.827 38.7191C30.4274 39.7272 29.1164 40.8293 27.8438 41.9922C27.6836 42.1382 27.5235 42.2843 27.3585 42.4347C26.0734 43.6651 24.9922 45.0564 23.9375 46.4844C23.8116 46.6543 23.8116 46.6543 23.6833 46.8276C21.0262 50.4696 19.371 54.6631 18.3589 59.0332C18.3212 59.1868 18.2834 59.3405 18.2445 59.4987C18.078 60.2804 18.045 60.6523 18.3291 61.4228C18.6164 61.9299 18.6164 61.9299 19.0547 62.1094C19.6242 62.1909 19.6242 62.1909 20.2266 62.1094C20.8822 61.5785 21.1214 61.1529 21.2993 60.3363C21.3435 60.1434 21.3878 59.9505 21.4333 59.7517C21.4782 59.5468 21.5231 59.342 21.5693 59.1309C22.886 53.5574 25.4303 48.8498 29.4062 44.7266C29.546 44.5745 29.6857 44.4225 29.8297 44.2658C31.2418 42.7715 32.9328 41.6161 34.6225 40.458C35.3956 39.9252 35.3956 39.9252 35.8882 39.148C35.8405 38.5283 35.6358 38.1889 35.2656 37.6953C34.0629 37.094 33.2008 37.7286 32.2383 38.4278Z"
                  fill="#A52A2A"
                />
                <path
                  d="M7.45362 71.7768C7.68017 71.775 7.68017 71.775 7.91131 71.7733C8.42046 71.7704 8.92944 71.7732 9.43859 71.7759C9.80608 71.775 10.1736 71.7737 10.541 71.7722C11.5532 71.7689 12.5654 71.7705 13.5776 71.7729C14.6683 71.7747 15.7589 71.772 16.8496 71.7698C18.9872 71.7663 21.1247 71.7671 23.2623 71.7694C24.999 71.7711 26.7357 71.7714 28.4724 71.7705C28.7193 71.7704 28.9661 71.7703 29.2204 71.7702C29.7218 71.7699 30.2233 71.7697 30.7247 71.7694C35.2961 71.7672 39.8674 71.7695 44.4388 71.7736C48.6138 71.7773 52.7887 71.7769 56.9636 71.7732C61.652 71.769 66.3404 71.7674 71.0288 71.7698C71.5284 71.77 72.028 71.7703 72.5276 71.7705C72.8963 71.7707 72.8963 71.7707 73.2725 71.7709C75.0079 71.7716 76.7432 71.7704 78.4785 71.7686C80.5923 71.7664 82.706 71.767 84.8198 71.7711C85.899 71.7732 86.9782 71.774 88.0574 71.7714C89.0443 71.7691 90.0312 71.7704 91.0181 71.7745C91.3761 71.7754 91.7341 71.7749 92.0921 71.7731C92.577 71.7707 93.0616 71.7731 93.5464 71.7768C93.7573 71.774 93.7573 71.774 93.9725 71.7712C94.6308 71.7812 94.9767 71.8338 95.5082 72.2359C96.1485 73.1204 95.9313 74.329 95.9224 75.3785C95.927 75.6276 95.9317 75.8767 95.9365 76.1334C95.9361 76.3735 95.9357 76.6135 95.9353 76.8609C95.9355 77.1894 95.9355 77.1894 95.9358 77.5246C95.731 78.5219 95.0821 78.9313 94.2744 79.4901C94.073 79.6121 93.8716 79.7342 93.6641 79.86C93.555 79.9266 93.446 79.9932 93.3337 80.0618C92.9889 80.272 92.6429 80.4803 92.2969 80.6885C92.0649 80.8296 91.8329 80.9707 91.6011 81.112C90.9877 81.4852 90.373 81.8564 89.7578 82.2266C89.612 82.3287 89.4662 82.4307 89.316 82.5358C88.6604 82.8751 88.213 82.8879 87.4763 82.8912C87.3471 82.8926 87.2178 82.894 87.0847 82.8954C86.6509 82.8993 86.2173 82.899 85.7835 82.8988C85.4696 82.9007 85.1558 82.9029 84.8419 82.9053C83.9787 82.9112 83.1155 82.9134 82.2523 82.9149C81.3215 82.9172 80.3907 82.9228 79.4599 82.9279C77.2109 82.9395 74.962 82.9454 72.713 82.9506C71.653 82.9532 70.593 82.9563 69.533 82.9594C66.0073 82.9694 62.4816 82.9779 58.9559 82.9821C58.041 82.9832 57.126 82.9844 56.2111 82.9855C55.9837 82.9858 55.7563 82.9861 55.5221 82.9864C51.8431 82.9912 48.1642 83.0061 44.4853 83.0251C40.705 83.0445 36.9247 83.055 33.1444 83.0569C31.0232 83.0582 28.9021 83.0633 26.781 83.0783C24.9733 83.091 23.1659 83.0957 21.3582 83.09C20.4371 83.0874 19.5164 83.0884 18.5953 83.0998C11.6437 83.1815 11.6437 83.1815 8.6958 80.7729C8.03844 80.2514 7.32398 79.8184 6.61572 79.3702C5.41888 78.5878 5.41888 78.5878 5.18749 78.1251C5.12908 77.2229 5.13318 76.319 5.12646 75.4151C5.12079 75.1626 5.11513 74.9101 5.10929 74.6499C5.10766 74.4074 5.10602 74.165 5.10433 73.9152C5.10149 73.6926 5.09864 73.4701 5.0957 73.2408C5.30958 71.8789 6.24545 71.761 7.45362 71.7768Z"
                  fill="#A52A2A"
                />
                <path
                  d="M85.5961 27.5937C88.3999 29.8808 90.6875 33.0412 91.1247 36.7188C91.4097 40.961 90.8654 44.9131 88.0038 48.2244C85.4243 51.0498 82.2118 53.005 78.321 53.1861C74.2799 53.3017 70.6539 52.518 67.6017 49.7315C64.7223 46.9698 63.0367 43.7474 62.9214 39.7197C62.8752 35.736 63.8723 32.2306 66.6716 29.3119C71.6621 24.3154 79.7803 23.1984 85.5961 27.5937ZM75.4997 32.8125C75.4997 34.3594 75.4997 35.9063 75.4997 37.5C73.9528 37.5 72.4059 37.5 70.8122 37.5C70.8122 38.5313 70.8122 39.5625 70.8122 40.625C72.3591 40.625 73.9059 40.625 75.4997 40.625C75.4997 42.1719 75.4997 43.7188 75.4997 45.3125C76.5309 45.3125 77.5622 45.3125 78.6247 45.3125C78.6247 43.7657 78.6247 42.2188 78.6247 40.625C80.1716 40.625 81.7184 40.625 83.3122 40.625C83.3122 39.5938 83.3122 38.5625 83.3122 37.5C81.7653 37.5 80.2184 37.5 78.6247 37.5C78.6247 35.9532 78.6247 34.4063 78.6247 32.8125C77.5934 32.8125 76.5622 32.8125 75.4997 32.8125Z"
                  fill="#A52A2A"
                />
              </svg>
              <span>
                <h4 className="text-xl font-semibold">Food Order</h4>
                <p className="text-justify">
                  Food is the necessity of life. It provides nutrition,
                  sustenance growth to human body.
                </p>
              </span>
            </div>
            <div className="px-2 py-3 rounded-lg shadow-lg md:px-4">
              <svg
                className="items-center w-16 mx-auto md:w-24 md:h-24"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.2478 13.9588C48.5055 13.9577 48.5055 13.9577 48.7685 13.9565C49.1296 13.956 49.4907 13.9574 49.8518 13.9607C50.4009 13.9649 50.9496 13.9607 51.4987 13.9557C51.8514 13.9562 52.2042 13.9572 52.5569 13.9588C52.7191 13.9572 52.8813 13.9556 53.0484 13.954C54.3788 13.9751 55.4071 14.3428 56.4067 15.2344C56.5119 15.3633 56.6172 15.4922 56.7256 15.625C56.8338 15.7539 56.9421 15.8828 57.0536 16.0157C58.1455 17.5265 57.9651 19.135 57.6915 20.8916C57.5856 21.5417 57.4732 22.1905 57.3604 22.8394C57.3044 23.1736 57.2487 23.5079 57.1933 23.8423C56.7891 26.2498 56.7891 26.2498 56.5547 26.9532C56.8037 26.9756 57.0527 26.998 57.3092 27.0211C58.3322 27.135 59.3073 27.3662 60.3022 27.6245C60.4708 27.667 60.6394 27.7094 60.813 27.7531C61.685 27.9753 62.541 28.2167 63.3906 28.5157C63.1191 29.263 62.7646 29.9366 62.3802 30.6294C60.0415 34.868 59.5024 39.3405 60.8203 44.0071C61.138 45.0158 61.5295 45.9411 62.0234 46.875C62.1194 47.0631 62.2153 47.2512 62.3141 47.445C64.3911 51.2768 68.0399 54.0825 72.1919 55.3589C77.2572 56.6224 81.8043 55.8984 86.3007 53.3063C86.723 53.0758 87.1573 52.8976 87.6094 52.7344C89.2195 58.0965 89.7578 63.1377 89.7578 68.75C63.9121 68.75 38.0664 68.75 11.4375 68.75C11.4375 60.4014 11.4375 60.4014 12.0234 57.8125C12.0602 57.6422 12.0969 57.4718 12.1347 57.2962C14.3606 47.1923 20.4449 38.3432 29.1011 32.6783C33.81 29.6721 38.8205 27.9828 44.25 26.7578C44.1968 26.4537 44.1968 26.4537 44.1424 26.1434C44.0097 25.3829 43.8792 24.622 43.7493 23.8611C43.6931 23.5333 43.6362 23.2056 43.5788 22.878C42.6752 17.7174 42.6752 17.7174 43.909 15.8379C45.0547 14.3674 46.4311 13.9411 48.2478 13.9588ZM32.2383 38.4278C32.1026 38.5239 31.9668 38.6201 31.827 38.7191C30.4274 39.7272 29.1164 40.8293 27.8438 41.9922C27.6836 42.1382 27.5235 42.2843 27.3585 42.4347C26.0734 43.6651 24.9922 45.0564 23.9375 46.4844C23.8116 46.6543 23.8116 46.6543 23.6833 46.8276C21.0262 50.4696 19.371 54.6631 18.3589 59.0332C18.3212 59.1868 18.2834 59.3405 18.2445 59.4987C18.078 60.2804 18.045 60.6523 18.3291 61.4228C18.6164 61.9299 18.6164 61.9299 19.0547 62.1094C19.6242 62.1909 19.6242 62.1909 20.2266 62.1094C20.8822 61.5785 21.1214 61.1529 21.2993 60.3363C21.3435 60.1434 21.3878 59.9505 21.4333 59.7517C21.4782 59.5468 21.5231 59.342 21.5693 59.1309C22.886 53.5574 25.4303 48.8498 29.4062 44.7266C29.546 44.5745 29.6857 44.4225 29.8297 44.2658C31.2418 42.7715 32.9328 41.6161 34.6225 40.458C35.3956 39.9252 35.3956 39.9252 35.8882 39.148C35.8405 38.5283 35.6358 38.1889 35.2656 37.6953C34.0629 37.094 33.2008 37.7286 32.2383 38.4278Z"
                  fill="#A52A2A"
                />
                <path
                  d="M7.45362 71.7768C7.68017 71.775 7.68017 71.775 7.91131 71.7733C8.42046 71.7704 8.92944 71.7732 9.43859 71.7759C9.80608 71.775 10.1736 71.7737 10.541 71.7722C11.5532 71.7689 12.5654 71.7705 13.5776 71.7729C14.6683 71.7747 15.7589 71.772 16.8496 71.7698C18.9872 71.7663 21.1247 71.7671 23.2623 71.7694C24.999 71.7711 26.7357 71.7714 28.4724 71.7705C28.7193 71.7704 28.9661 71.7703 29.2204 71.7702C29.7218 71.7699 30.2233 71.7697 30.7247 71.7694C35.2961 71.7672 39.8674 71.7695 44.4388 71.7736C48.6138 71.7773 52.7887 71.7769 56.9636 71.7732C61.652 71.769 66.3404 71.7674 71.0288 71.7698C71.5284 71.77 72.028 71.7703 72.5276 71.7705C72.8963 71.7707 72.8963 71.7707 73.2725 71.7709C75.0079 71.7716 76.7432 71.7704 78.4785 71.7686C80.5923 71.7664 82.706 71.767 84.8198 71.7711C85.899 71.7732 86.9782 71.774 88.0574 71.7714C89.0443 71.7691 90.0312 71.7704 91.0181 71.7745C91.3761 71.7754 91.7341 71.7749 92.0921 71.7731C92.577 71.7707 93.0616 71.7731 93.5464 71.7768C93.7573 71.774 93.7573 71.774 93.9725 71.7712C94.6308 71.7812 94.9767 71.8338 95.5082 72.2359C96.1485 73.1204 95.9313 74.329 95.9224 75.3785C95.927 75.6276 95.9317 75.8767 95.9365 76.1334C95.9361 76.3735 95.9357 76.6135 95.9353 76.8609C95.9355 77.1894 95.9355 77.1894 95.9358 77.5246C95.731 78.5219 95.0821 78.9313 94.2744 79.4901C94.073 79.6121 93.8716 79.7342 93.6641 79.86C93.555 79.9266 93.446 79.9932 93.3337 80.0618C92.9889 80.272 92.6429 80.4803 92.2969 80.6885C92.0649 80.8296 91.8329 80.9707 91.6011 81.112C90.9877 81.4852 90.373 81.8564 89.7578 82.2266C89.612 82.3287 89.4662 82.4307 89.316 82.5358C88.6604 82.8751 88.213 82.8879 87.4763 82.8912C87.3471 82.8926 87.2178 82.894 87.0847 82.8954C86.6509 82.8993 86.2173 82.899 85.7835 82.8988C85.4696 82.9007 85.1558 82.9029 84.8419 82.9053C83.9787 82.9112 83.1155 82.9134 82.2523 82.9149C81.3215 82.9172 80.3907 82.9228 79.4599 82.9279C77.2109 82.9395 74.962 82.9454 72.713 82.9506C71.653 82.9532 70.593 82.9563 69.533 82.9594C66.0073 82.9694 62.4816 82.9779 58.9559 82.9821C58.041 82.9832 57.126 82.9844 56.2111 82.9855C55.9837 82.9858 55.7563 82.9861 55.5221 82.9864C51.8431 82.9912 48.1642 83.0061 44.4853 83.0251C40.705 83.0445 36.9247 83.055 33.1444 83.0569C31.0232 83.0582 28.9021 83.0633 26.781 83.0783C24.9733 83.091 23.1659 83.0957 21.3582 83.09C20.4371 83.0874 19.5164 83.0884 18.5953 83.0998C11.6437 83.1815 11.6437 83.1815 8.6958 80.7729C8.03844 80.2514 7.32398 79.8184 6.61572 79.3702C5.41888 78.5878 5.41888 78.5878 5.18749 78.1251C5.12908 77.2229 5.13318 76.319 5.12646 75.4151C5.12079 75.1626 5.11513 74.9101 5.10929 74.6499C5.10766 74.4074 5.10602 74.165 5.10433 73.9152C5.10149 73.6926 5.09864 73.4701 5.0957 73.2408C5.30958 71.8789 6.24545 71.761 7.45362 71.7768Z"
                  fill="#A52A2A"
                />
                <path
                  d="M85.5961 27.5937C88.3999 29.8808 90.6875 33.0412 91.1247 36.7188C91.4097 40.961 90.8654 44.9131 88.0038 48.2244C85.4243 51.0498 82.2118 53.005 78.321 53.1861C74.2799 53.3017 70.6539 52.518 67.6017 49.7315C64.7223 46.9698 63.0367 43.7474 62.9214 39.7197C62.8752 35.736 63.8723 32.2306 66.6716 29.3119C71.6621 24.3154 79.7803 23.1984 85.5961 27.5937ZM75.4997 32.8125C75.4997 34.3594 75.4997 35.9063 75.4997 37.5C73.9528 37.5 72.4059 37.5 70.8122 37.5C70.8122 38.5313 70.8122 39.5625 70.8122 40.625C72.3591 40.625 73.9059 40.625 75.4997 40.625C75.4997 42.1719 75.4997 43.7188 75.4997 45.3125C76.5309 45.3125 77.5622 45.3125 78.6247 45.3125C78.6247 43.7657 78.6247 42.2188 78.6247 40.625C80.1716 40.625 81.7184 40.625 83.3122 40.625C83.3122 39.5938 83.3122 38.5625 83.3122 37.5C81.7653 37.5 80.2184 37.5 78.6247 37.5C78.6247 35.9532 78.6247 34.4063 78.6247 32.8125C77.5934 32.8125 76.5622 32.8125 75.4997 32.8125Z"
                  fill="#A52A2A"
                />
              </svg>
              <span>
                <h4 className="text-xl font-semibold">Promote Restaurant</h4>
                <p className="text-justify">
                  Food is the necessity of life. It provides nutrition,
                  sustenance growth to human body.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 md:w-1/2">
        <div>
          <h4 className="text-[#A52A2A] text-lg">About us ___</h4>
          <p className="text-3xl md:text-5xl font-bold text-[#333333] mt-4">
            Food is an important part Of a balanced Diet
          </p>
          <p className="mt-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <div className="flex justify-between md:justify-normal mt-8 gap-[14px]">
            <div>
              <button className="px-6 md:px-12 py-4 hover:bg-opacity-80 bg-[#880808] rounded-md text-white font-bold text-xs md:text-lg">
                Show More
              </button>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <span>
                <IoPlayOutline className="h-8 w-8 md:h-[60px] md:w-[60px] hover:bg-green-700 bg-[#880808] text-white p-2 rounded-full"></IoPlayOutline>
              </span>
              <h4 className="font-bold">Watch Video</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
