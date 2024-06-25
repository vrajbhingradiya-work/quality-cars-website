import Link from "next/link";
import React from "react";

function ShowRoomDetails({ element }: any) {
  return (
    <>
      <div
        className={`${
          element.className == "" ? "" : element.className
        } grid grid-cols-1 md:grid-cols-2 items-center justify-start text-black `}
      >
        <span className="font-semibold text-xl">{element.details?.line1}</span>
        <Link
          href={element.details?.addressLink}
          className="p-2 md:p-4 flex items-center  text-black/60 underline text-base font-medium hover:text-black transition hover:ease-in-out duration-150 "
        >
          Locate on Map
        </Link>
        <div className="cols-span-2 text-base md:text-lg px-2">
          <span className="">{element.details?.line2}</span>
        </div>
      </div>
    </>
  );
}

export default ShowRoomDetails;
