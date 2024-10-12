import Image from "next/image";
import React from "react";
import bgImage from "@/assets/images/header1.jpg";

function BannerCompareCars() {
  return (
    <div>
      <div className="relative h-[80vh] w-full">
        <Image
          src={bgImage}
          alt="image"
          priority={true}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex items-end p-16 px-32 tracking-widest bg-black/75 ">
          <div className="flex flex-col gap-3 text-white">
            <span className="text-lg font-semibold">QUALITY CARS</span>
            <span className="text-6xl font-bold">COMPARE CARS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCompareCars;
