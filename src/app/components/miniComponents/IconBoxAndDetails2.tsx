import React from "react";

function IconBoxAndDetails2({ icon }: any) {
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
        <div className="flex gap-2 text-xl">
          <span>{icon.details?.line1}</span>
          <span className="font-semibold">{icon.details?.line2}</span>
        </div>
      </div>
    </>
  );
}

export default IconBoxAndDetails2;
