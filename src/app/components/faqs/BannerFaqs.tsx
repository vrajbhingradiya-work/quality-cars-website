import Image from "next/image";
import React from "react";
import bgImage from "@/assets/images/header1.jpg";

function BannerFaqs() {
  return (
    <div>
      <div className="relative h-[50vh] xl:h-[80vh] w-full">
        <Image
          src={bgImage}
          priority={true}
          alt="image"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex items-end p-8  md:p-16 md:px-32 tracking-widest bg-black/75 ">
          <div className="flex flex-col items-center w-full mb-3 gap-3 text-white text-left md:text-center">
            <span className="text-xl pr-[20%] md:pr-0 md:text-lg font-semibold w-full">{`FREQUENTLY ASKED QUESTIONS`}</span>
            <span className="hidden md:block text-3xl md:text-6xl pr-[20%] md:pr-0 font-bold w-full">
              HELLO, HOW CAN WE HELP ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerFaqs;
