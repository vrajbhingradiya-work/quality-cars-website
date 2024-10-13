import Image from "next/image";
import React from "react";
import image from "../../../assets/images/sell-car/no-bg-car-image.png";
import Button from "../miniComponents/Button";
import IconBoxAndDetails2 from "../miniComponents/IconBoxAndDetails2";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import Link from "next/link";

function SellCar() {
  const iconsBoxes = [
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "151", line2: "Check Point" },
    },
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "Sell your car", line2: "at best prices!" },
    },
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "2000+ Satisified", line2: "Customers" },
    },
  ];
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center xl:gap-6 gap-16 w-full h-full  justify-between bg-white xl:p-32 xl:pt-4 md:p-20 p-8 pt-0 ">
        <div className=" flex flex-col  justify-between gap-8 w-full py-16 pt-8 ">
          <div className="text-3xl md:text-5xl  text-left font-semibold tracking-wide w-full flex flex-col gap-2 justify-center items-center xl:items-start xl:pl-6">
            <p className="  text-black  w-full">SELL YOUR LUXURY CAR</p>
            <p className="hollowLetters w-full">AT MOST APPROPRIATE PRICE</p>
            {/* <p className="hollowLetters w-full "></p> */}
          </div>
          <div className="w-full xl:hidden rounded-2xl overflow-hidden">
            <Image
              className="h-full w-full object-contain  "
              src={image}
              alt="showroom image"
            />
          </div>
          <div className="grid md:pl-[30%] grid-cols-1 xl:pl-6 gap-4">
            {iconsBoxes.map((icon, index) => (
              <IconBoxAndDetails2 key={index} icon={icon} />
            ))}
          </div>
          <div className="mt-8 flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:items-start xl:pl-6 gap-4 w-full">
            <Link
              href="https://wa.me/9799907612"
              className={`bg-[#2CB742] hover:bg-[#1C9E32] fill-white gap-4 w-full md:w-[90%] md:max-w-[280px] xl:max-w-full px-4 pl-6 py-4 flex justify-between items-center group transition ease-in-out duration-300 rounded-xl tracking-[.2em]`}
            >
              <WhatsappIcon className="h-[22px] w-[22px]" />
              <span>CHAT ON WHATSAPP</span>

              <svg
                className={`w-[15px] h-[15px] group-hover:translate-x-1   transition ease-in-out duration-150`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
            <Link
              href="tel:9799907612"
              className={`w-full md:w-[90%] md:max-w-[280px] xl:max-w-full bg-black hover:bg-white hover:text-black border-black hover:border-[1px]  flex items-center justify-center px-4 pl-6 py-4 group transition ease-in-out duration-300 rounded-xl tracking-[.2em]`}
            >
              <span>CALL NOW: 9799907612</span>

              <svg
                className={`w-[15px] h-[15px] group-hover:translate-x-1   transition ease-in-out duration-150`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full hidden xl:block rounded-2xl overflow-hidden">
          <Image
            className="h-full w-full object-contain bg-white"
            src={image}
            alt="showroom image"
          />
        </div>
      </div>
    </>
  );
}

export default SellCar;
