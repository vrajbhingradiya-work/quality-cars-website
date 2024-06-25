import Image from "next/image";
import React from "react";
import bgImage from "@/assets/images/header1.jpg";

function BannerWallpaper() {
  return (
    <div>
      <div className="relative h-[80vh] w-full">
        <Image
          src={bgImage}
          alt="image"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex items-end p-8  md:p-16 md:px-32 tracking-widest bg-black/75 ">
          <div className="flex flex-col items-center w-full mb-3 gap-3 text-white text-left md:text-center">
            <span className="text-xl pr-[20%] md:pr-0 md:text-lg font-semibold w-full">{`QUALITY CARS`}</span>
            <span className="text-3xl md:text-6xl pr-[20%] md:pr-0 font-bold w-full">
              WALLPAPER COLLECTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerWallpaper;
