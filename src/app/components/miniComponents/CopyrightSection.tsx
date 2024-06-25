import Link from "next/link";
import React from "react";

function CopyrightSection() {
  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row justify-between items-center text-[#A6A3A1] tracking-wide text-sm ">
      <div className="flex lg:flex-row lg:gap-4 lg:items-center flex-col  justify-start items-start w-full md:w-[50%]">
        <span className="text-white tracking-widest w-full md:w-auto text-center md:text-left">
          Copyright &copy; 2024 Quality Cars{" "}
        </span>
        <div className="flex  gap-2 justify-between items-center ">
          <div className="text-xl">|{/* straight slash seperator */}</div>

          <Link href="/buy">{/* options */}Privacy Policy</Link>
          <div className="text-xl">|{/* straight slash seperator */}</div>
          <Link href="/sell"> Cancellation & Refund</Link>
          <div className="text-xl">|{/* straight slash seperator */}</div>
          <Link href="/"> Terms of use</Link>
        </div>
      </div>
      <span className="">
        Website Developed by{" "}
        <Link
          href="https://portfolio-mu-wine-82.vercel.app/"
          className="hover:text-white"
        >
          Vraj Bhingradiya
        </Link>
      </span>
    </div>
  );
}

export default CopyrightSection;
