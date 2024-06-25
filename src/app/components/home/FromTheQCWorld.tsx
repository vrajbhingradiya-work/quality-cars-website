import React from "react";
import Button from "../miniComponents/Button";
import Link from "next/link";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function FromTheQCWorld() {
  return (
    <SimpleFadeIn sequence={4}>
      <div className="bg-white p-8 xl:p-32 flex flex-col gap-8 items-start w-full">
        <span className="text-black text-4xl font-normal tracking-[0.1em] ">
          FROM QUALITY CARS WORLD
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:flex gap-6 w-full">
          <Link
            href="/wallpaper"
            className=" md:col-span-2 cardWithFloatingHeading w-full lg:w-full  "
          >
            <span className=" w-full ">WALLPAPERS</span>
          </Link>
          {/* <div className="col-span-1 md:col-span-2 cardWithFloatingHeading w-full lg:w-[35%]">
          <span className=" w-full  ">MERCHANDISE</span>
        </div> */}
          <Link
            href="/about-us"
            className="md:col-span-2 cardWithFloatingHeading w-full lg:w-full "
          >
            <span className=" w-full ">ABOUT US</span>
          </Link>
        </div>
        <Button
          link="/about-us"
          title="KNOW MORE ABOUT US"
          className="text-black border-[#CACACA] border-[1px] fill-[#CACACA] hover:bg-black hover:text-white lg:w-[25%] w-[95%] md:w-[50%]"
        />
      </div>
    </SimpleFadeIn>
  );
}

export default FromTheQCWorld;
