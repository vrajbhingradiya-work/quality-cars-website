import React from "react";

import IconBoxAndDetails2 from "../miniComponents/IconBoxAndDetails2";
import { TiTickOutline as TickMark } from "react-icons/ti";
import ContactUsForm from "./ContactUsForm";

function FormAndKeyPoints() {
  const keyPoints = [
    {
      html: (
        <p className="text-black">
          One of the biggest and{" "}
          <span className="text-red-500">most trusted</span> brand in the
          industry
        </p>
      ),
    },
    {
      html: (
        <p className="text-black">
          Repeat business with every single client over the last 17 years
        </p>
      ),
    },
    {
      html: <p className="text-black">Pan India Presence</p>,
    },
    {
      html: <p className="text-black">ZERO commitment failures</p>,
    },
    {
      html: <p className="text-black">Touching 5 Million people every month</p>,
    },
    {
      html: <p className="text-black">10000 + Satisfied Clients</p>,
    },
    {
      html: (
        <p className="text-black">
          Conclusion of the transaction within the same working day
        </p>
      ),
    },
    {
      html: <p className="text-black">100% Payment Secured</p>,
    },
    {
      html: (
        <p className="text-black">
          50% of the cars are booked before they are ready
        </p>
      ),
    },
    {
      html: (
        <p className="text-black">
          Fastest stock turn around time in the industry
        </p>
      ),
    },
    {
      html: <p className="text-black">Transparent and simple processes</p>,
    },
    {
      html: (
        <p className="text-black">Not a single litigation since inception</p>
      ),
    },
    {
      html: (
        <p className="text-black">
          A dedicated team of 175 professionals serving you 24x7
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col  items-center xl:gap-6 md:gap-16 gap-1 w-full h-full  justify-center bg-[#F2F2F2] xl:p-32 xl:pt-4 p-8 ">
        <div className=" flex flex-col justify-center gap-8 w-full py-16 pt-8 ">
          <div className="text-3xl md:text-5xl font-semibold tracking-wide w-full flex flex-col gap-2 justify-center items-center  text-left md:text-center">
            <p className=" w-full text-black ">
              WANT TO SELL YOUR LUXURY CAR ?
            </p>
            <p className="hollowLetters w-full text-4xl md:text-inherit">
              {`WE'RE ALWAYS HERE!`}
            </p>
          </div>
        </div>
        <div className="min-w-[300px]  max-w-[500px] xl:min-w-full flex flex-col xl:flex-row justify-between md:gap-24 xl:gap-0 md:h-full h-auto">
          <div className="grid text-lg grid-cols-1  tracking-wider gap-4">
            {keyPoints.map((keypoint, index) => (
              <KeyPoint key={index} keypoint={keypoint} />
            ))}
          </div>
          <div className="pt-12 md:pt-0">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAndKeyPoints;

function KeyPoint({ keypoint }: any) {
  return (
    <div className="flex gap-4 border-b-[0.5px] border-[#CCCCCC]">
      <TickMark className="h-[25px] w-[25px] fill-red-500" />
      {keypoint?.html}
    </div>
  );
}
