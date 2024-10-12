import Button from "../miniComponents/Button";
import Link from "next/link";
import React from "react";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";

function ClickToActionBtns() {
  return (
    <div className="p-8  grid grid-cols-1 md:grid-cols-2 items-center justify-center   gap-4 w-full">
      <Link
        href="https://wa.me/9829407612"
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
        href="tel:9829407612"
        className={`w-full md:w-[90%] md:max-w-[280px] xl:max-w-full bg-black hover:bg-white hover:text-black border-black hover:border-[1px]  flex items-center justify-center px-4 pl-6 py-4 group transition ease-in-out duration-300 rounded-xl tracking-[.2em]`}
      >
        <span>CALL NOW: 9829407612</span>

        <svg
          className={`w-[15px] h-[15px] group-hover:translate-x-1   transition ease-in-out duration-150`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </Link>
    </div>
  );
}

export default ClickToActionBtns;
