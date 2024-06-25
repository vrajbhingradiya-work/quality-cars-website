import React from "react";
import Button from "../miniComponents/Button";
import IconBoxAndDetails3 from "../miniComponents/IconBoxAndDetails3";
import { CiMail as MailIcon } from "react-icons/ci";
import Link from "next/link";
import ShowRoomDetails from "../miniComponents/ShowRoomDeatils";

function ContactInfo() {
  const iconsBoxes = [
    {
      svg: <MailIcon className="h-[25px] w-[25px]" />,
      className: "text-black",
      details: {
        line1: "info@qualitycarsjaipur.com",
        line2: "The best way to get answer faster.",
      },
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
      details: {
        line1: "To Buy Cars (+91 9829407612)",
        line2: "We are happy to help (10am to 6pm)",
      },
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
      details: {
        line1: "To Sell Cars (+91 9829407612)",
        line2: "We are happy to help (10am to 6pm)",
      },
    },
  ];

  const showrooms = [
    {
      details: {
        addressLink: "https://maps.app.goo.gl/eRZCYbNrFasngtjS9",
        line1: "Quality Cars Jaipur",
        line2:
          "27, Pandit TN Mishra Marg, Rail Nagar, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019",
      },
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 w-full md:pl-32 p-8 ">
        <div className=" flex flex-col  justify-between gap-8 w-full py-16 pt-8 ">
          <div className="text-3xl md:text-5xl font-semibold tracking-wide w-full flex flex-col gap-2 justify-center items-start ">
            <p className="  text-black">CONTACT US</p>
          </div>

          <div className="grid p] grid-cols-1  gap-8">
            {iconsBoxes.map((icon, index) => (
              <IconBoxAndDetails3 key={index} icon={icon} />
            ))}
          </div>
        </div>
        <div className=" flex flex-col  justify-between gap-8 w-full py-16 pt-8 ">
          <div className="text-3xl md:text-5xl font-semibold tracking-wide w-full flex flex-col gap-2 justify-center items-start ">
            <p className="  text-black">OUR SHOWROOM</p>
          </div>

          <div className="grid  grid-cols-1  gap-4">
            {showrooms.map((element, index) => (
              <ShowRoomDetails key={index} element={element} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
