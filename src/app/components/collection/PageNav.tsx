"use client";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import React from "react";
import Link from "next/link";

function PageNav() {
  const path = usePathname();
  const pathArray = path.split("/");

  let hrefPath = "";

  return (
    <div className="w-full p-4 px-16 md:block hidden">
      <span className="flex gap-4">
        {pathArray.map((item, index) => {
          hrefPath = hrefPath + (item == pathArray[1] ? `${item}` : `/${item}`);
          return (
            <Link
              href={hrefPath}
              key={index}
              className={`${
                item == "" ? "text-[#8F8F8F]" : " text-[#E81534]"
              } flex items-center gap-3 font-semibold tracking-wide`}
            >
              <span className={`${item == "" ? "hidden" : ""}`}>
                <RightArrow className="fill-black h-4 w-4" />
              </span>
              {item == "" ? "HOME" : item.toUpperCase()}
            </Link>
          );
        })}
      </span>
    </div>
  );
}

export default PageNav;
