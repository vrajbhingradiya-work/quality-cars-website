"use client";
import Image from "next/image";

function SwipeCorousel({ car }: any) {
  return (
    <div className="bg-black p-2 py-6 flex flex-col w-full items-start tracking-wider">
      <div className="w-auto  grid grid-cols-1 md:grid-cols-2 border-1 border-black md:inline-flex gap-3">
        {car?.images.map((image: any, index: any) => (
          <div
            key={index}
            className=" h-full xl:h-[50vh] max-h-[281px] w-[100%] max-w-[500px] object-cover rounded-lg"
          >
            <Image src={image} fill={true} objectFit="cover" alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwipeCorousel;
