import React from "react";
import image from "@/assets/images/2-cars.jpg";
import image3 from "@/assets/images/cars-right.jpg";
import image2 from "@/assets/images/showroom-back.jpg";
import Image from "next/image";

function OurValues() {
  return (
    <div className="content-box py-32 px-8 xl:px-0 ">
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="text-3xl font-bold text-center w-full pb-24 ">
          OUR VALUES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <Image
              src={image}
              className="object-cover w-full h-[400px] border-white/50 border-2"
              alt="image"
            />
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-semibold ">INDIVIDUAL AND TEAM</div>
              <div className="text-white/50">
                Our Talented Individuals are our greatest resource. However they
                can only pursue the extraordinary by working together as a team.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={image2}
              className="object-cover w-full h-[250px] border-white/50 border-2"
              alt="image"
            />
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-semibold ">INDIVIDUAL AND TEAM</div>
              <div className="text-white/50">
                Our Talented Individuals are our greatest resource. However they
                can only pursue the extraordinary by working together as a team.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={image3}
              className="object-cover w-full h-[300px] border-white/50 border-2"
              alt="image"
            />
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-semibold">INDIVIDUAL AND TEAM</div>
              <div className="text-white/50">
                Our Talented Individuals are our greatest resource. However they
                can only pursue the extraordinary by working together as a team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
