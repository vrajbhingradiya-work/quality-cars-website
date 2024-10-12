import EmiCalculator from "@/components/pageComponents/emi-calculator/EmiCalculator";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import React from "react";

function page() {
  return (
    <div className="">
      <SlideInFromBottom sequence={2}>
        <EmiCalculator isShowing={true} />
      </SlideInFromBottom>
    </div>
  );
}

export default page;
