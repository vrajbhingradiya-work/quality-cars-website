import Link from "next/link";
import React from "react";
import { IoMdArrowForward as Arrow } from "react-icons/io";

function LastSection() {
  return (
    <div className="bg-white md:p-32 p-12 flex flex-col gap-8 items-start w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full xl:px-32">
        <Link
          href="/contact-us"
          className=" group cardWithFloatingHeading w-full   "
        >
          <div className="flex items-center gap-4 ">
            <span className="   ">CONTACT US</span>
            <Arrow className="h-[25px] w-[25px]  move-group-x " />
          </div>
        </Link>
        <Link
          href="qc-team"
          className="  cardWithFloatingHeading  group  w-full"
        >
          <div className="flex items-center gap-4 ">
            <span className="   ">QC TEAM</span>
            <Arrow className="h-[25px] w-[25px]  move-group-x " />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LastSection;
