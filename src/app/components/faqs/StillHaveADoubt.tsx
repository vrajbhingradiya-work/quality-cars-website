import Link from "next/link";
import React from "react";
import { IoCallOutline as CallIcon } from "react-icons/io5";
import { CiMail as MailIcon } from "react-icons/ci";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function StillHaveADoubt() {
  return (
    <div className="bg-white w-full p-16 xl:py-32 flex justify-center items-center">
      <SimpleFadeIn sequence={12}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-6 bg-white text-black tracking-wider text-center">
          <span className="text-3xl md:text-5xl font-bold">
            YOU STILL HAVE A QUESTION?
          </span>
          <span className="text-lg md:text-xl font-medium text-black/50 max-w-3xl xl:max-w-xl">
            If you connot find answer to your question in our FAQ, you can
            always contact us. We will answer to you shortly!
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center  items-center gap-6">
            <Link
              href="tel:9829407612"
              className="flex flex-col gap-2 p-6 items-center transition duration-250 hover:ease-in-out hover:bg-[#f2f2f2] border-[1px] hover:border-[#f2f2f2] border-black rounded-xl "
            >
              <CallIcon className="h-[75px] w-[75px] p-4" />
              <span className="text-xl md:text-2xl text-black font-semibold">{`(+91) 9829-4076-12`}</span>
              <span className="text-base md:text-lg text-black/50">{`We are always happy to help.`}</span>
            </Link>
            <Link
              href="mailto:info@qualitycarsjaipur.com"
              className="flex flex-col gap-2 p-6 items-center transition duration-250 hover:ease-in-out hover:bg-[#f2f2f2] border-[1px] hover:border-[#f2f2f2] border-black rounded-xl"
            >
              <MailIcon className="h-[75px] w-[75px] p-4" />
              <span className="text-xl md:text-2xl text-black font-semibold">{`info@qualitycarsjaipur.com`}</span>
              <span className="text-base md:text-lg text-black/50">{`The best way to get answer. `}</span>
            </Link>
          </div>
        </div>
      </SimpleFadeIn>
    </div>
  );
}

export default StillHaveADoubt;
