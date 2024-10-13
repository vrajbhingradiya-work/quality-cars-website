import React from "react";

function IconBoxAndDetails3({ icon }: any) {
  return (
    <>
      <div
        className={`${
          icon.className == "" ? "" : icon.className
        } flex gap-2 items-center justify-start`}
      >
        <div className="p-4 flex items-center rounded-lg border-[1px] border-[#CACACA]">
          {icon.svg}
        </div>
        <div className="flex flex-col gap-0 text-base md:text-xl">
          <span className="font-semibold">{icon.details?.line1}</span>
          <span>{icon.details?.line2}</span>
        </div>
      </div>
    </>
  );
}

export default IconBoxAndDetails3;
