import Image from "next/image";
import React from "react";
import image from "../../../assets/images/carlineup-2.jpg";
function Banner() {
  return (
    <div className="relative max-h-[500px] h-full my-16 ">
      <Image
        src={image}
        alt="image"
        className="w-full max-h-[500px] object-cover"
      />
      <div className=" absolute top-0 left-0 h-full z-10 bg-black/10 w-full">
        <div className=" flex flex-col justify-center  items-start gap-6 max-w-[450px] w-[100vw] h-full xl:w-[60vw] xl:ml-[200px] font-medium">
          <span className="text-6xl pl-8">
            We make finding the right car simple.
          </span>
          <button className=" ml-8 rounded-xl border-[1px] border-white text-center px-4 py-2 max-w-[150px] w-full transition-all ease-in-out duration-500 hover:bg-white hover:text-secondary hover:font-medium ">
            Find Out Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
