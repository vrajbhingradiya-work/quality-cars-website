import React from "react";
import InsuranceForm from "./InsuranceForm";
import { FaRegThumbsUp as ThumbsUpIcon } from "react-icons/fa";
import { GoTrophy as TrophyIcon } from "react-icons/go";
import { FaHandHoldingUsd as HandIcon } from "react-icons/fa";
function Insurance() {
  return (
    <div className="w-full ">
      <div className="content-box py-32 xl:pt-64">
        <div className="grid grid-cols-1 xl:grid-cols-3 ">
          <div className="col-span-1 xl:col-span-2 p-8 py-16 bg-white/20 flex flex-col gap-20">
            <div className="text-3xl font-medium">
              <span>Get cashless services at 3500+ network garages</span>
            </div>
            <div className="text-lg tracking-wide">
              <span>
                {
                  "A vehicle in today's world is an inseperable part of life. It gives an exclusiveness & freedom to your movement whether it is your day to day activity or going for a long drive with your family."
                }
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
              {insurancePageData.benefits.map((item: any, index: any) => {
                return (
                  <div key={index} className="flex flex-col gap-6">
                    <div className="icon">{item.icon}</div>
                    <div className="text-lg tracking-wide">
                      <span>{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-1 bg-secondary-dark flex justify-start items-start">
            <InsuranceForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

const insurancePageData = {
  benefits: [
    {
      icon: <ThumbsUpIcon className="h-12 w-12" />,
      description:
        "With multiple insurers integrated, we provide an unbiased comparison between all the top insurers",
    },
    {
      icon: <TrophyIcon className="h-12 w-12" />,
      description:
        "With multiple insurers integrated, we provide an unbiased comparison between all the top insurers",
    },
    {
      icon: <HandIcon className="h-12 w-12" />,
      description:
        "With multiple insurers integrated, we provide an unbiased comparison between all the top insurers",
    },
  ],
};
