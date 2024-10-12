import React from "react";
import { GoShieldCheck as ShieldTick } from "react-icons/go";
import { MdGavel as GavelIcon } from "react-icons/md";
import { MdOutlineSpeed as SpeedIcon } from "react-icons/md";
import { MdOutlineDescription as DescriptionIcon } from "react-icons/md";
import { IoCarSportOutline as CarIcon } from "react-icons/io5";
import { GrDocumentConfig as ServiceHistoryIcon } from "react-icons/gr";
import { TbShieldDollar as InsuranceIcon } from "react-icons/tb";
import { GoChecklist as PhysicalEvaluationIcon } from "react-icons/go";

function MandateCheckSection() {
  const mandateCheckPoints = [
    {
      svg: (
        <ShieldTick className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "No Accidental History",
    },
    {
      svg: (
        <GavelIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: " No litigations",
    },
    {
      svg: (
        <SpeedIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "No Odometer Tampering",
    },
    {
      svg: (
        <DescriptionIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "National Crime Record Check",
    },
    {
      svg: (
        <CarIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "Model 2018 & above & KMS driven less than 60,000 only",
    },
    {
      svg: (
        <ServiceHistoryIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "Service History Check",
    },
    {
      svg: (
        <InsuranceIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "Insurance History Check",
    },
    {
      svg: (
        <PhysicalEvaluationIcon className="h-[75px] md:h-[105px] w-[75px] md:w-[105px] p-4 md:p-8 rounded-xl bg-[#CCCCCC]" />
      ),
      title: "Physical Evaluation",
    },
  ];
  return (
    <>
      <div className="flex flex-col  items-center xl:gap-8 gap-16 w-full h-full  justify-center bg-[#F2F2F2] xl:p-32 xl:pt-4 p-8 py-16 ">
        <div className=" flex flex-col justify-center  items-center gap-8 w-full py-16 pt-8 ">
          <div className="lg:text-5xl font-semibold tracking-wide lg:max-w-full max-w-[500px] text-4xl flex flex-col gap-2 justify-center items-center  text-center">
            <p className="  text-black ">
              QC MANDATE CHECK FOR PURCHASING USED CAR
            </p>
          </div>
        </div>

        <div className="max-w-[500px] lg:max-w-full grid text-lg grid-cols-2 lg:grid-cols-4  tracking-wider gap-20 px-12">
          {mandateCheckPoints.map((checkPoint, index) => (
            <CheckPoint key={index} checkPoint={checkPoint} />
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default MandateCheckSection;

function CheckPoint({ checkPoint }: any) {
  return (
    <div className="flex flex-col gap-6 justify-start items-center text-black fill-black ">
      {checkPoint?.svg}
      <p className="text-center text-xs md:text-inherit md:px-4 xl:px-6 ">
        {checkPoint.title}
      </p>
    </div>
  );
}
