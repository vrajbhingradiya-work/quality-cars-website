"use client";

import React from "react";
import Link from "next/link";

function EmailSignup() {
  return (
    <div className="bg-[#292325] w-full lg:px-32 p-8 py-6 flex flex-col lg:flex-row justify-between items-center">
      <div className="p-4 flex gap-3 items-center">
        <span className=" tracking-[.25em] font-normal text-white pr-4">
          FOLLOW US
        </span>
        <Link
          href="/insta"
          className="icon-hover flex content-center h-[20px] w-[20px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </Link>
        <Link
          href="/facebook"
          className="icon-hover flex content-center h-[18px] w-[18px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </Link>
        <Link
          href="/insta"
          className="icon-hover flex content-center h-[24px] w-[24px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </Link>
      </div>
      <div className=" w-full lg:w-[35%] w-[50%]">
        <EmailSubmit />
      </div>
    </div>
  );
}

export default EmailSignup;

function EmailSubmit() {
  const [email, setEmail] = React.useState("");
  const handleSubmit = () => {
    setEmail("");
  };

  return (
    <div className="relative ">
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className="w-full bg-white text-[#8B7594] rounded-xl p-3 outline-none"
        placeholder="Enter your email for updates"
      />
      <button
        type="button"
        className="absolute top-0 right-0 bg-black text-white w-[25%] md:w-[20%] rounded-lg p-2 m-1"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}
