import React from "react";

function IconBoxAndDetails4({ icon }: any) {
  return (
    <>
      <div
        className={`${
          icon.className == "" ? "" : icon.className
        } flex gap-2 items-center justify-start`}
      >
        <div className="p-3 md:p-4 flex items-center rounded-lg border-[1px] border-[#CACACA]">
          {icon.svg}
        </div>
        <div className="flex flex-col  text-lg md:text-xl text-white/70">
          <span className={`${icon.details?.line1 ? "" : "hidden"}`}>
            {icon.details?.line1}
          </span>
          <span
            className={`${
              icon.details?.line2 ? "" : "hidden"
            } -mt-1 md:mt-none font-medium`}
          >
            {icon.details?.line2}
          </span>
        </div>
      </div>
    </>
  );
}

export default IconBoxAndDetails4;
