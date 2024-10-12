import Insurance from "@/components/pageComponents/insurance/Insurance";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import React from "react";

function page() {
  return (
    <div className="">
      <SlideInFromBottom sequence={2}>
        <Insurance />
      </SlideInFromBottom>
    </div>
  );
}

export default page;
