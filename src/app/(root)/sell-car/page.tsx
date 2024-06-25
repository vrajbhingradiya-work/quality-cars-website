import FormAndKeyPoints from "@/app/components/sell-car/FormAndKeyPoints";
import HowToSell from "@/app/components/sell-car/HowToSell";
import LastSection from "@/app/components/sell-car/LastSection";
import MandateCheckSection from "@/app/components/sell-car/MandateCheckSection";
import SellCarBanner from "@/app/components/sell-car/SellCarBanner";
import SimpleFadeIn from "@/app/components/utils/SimpleFadeIn";
import React from "react";

function page() {
  return (
    <div>
      <SimpleFadeIn sequence={2}>
        <div>
          <SellCarBanner />
          <FormAndKeyPoints />
          <MandateCheckSection />
        </div>
      </SimpleFadeIn>
      <SimpleFadeIn sequence={4}>
        <HowToSell />
      </SimpleFadeIn>
      <SimpleFadeIn sequence={5}>
        <LastSection />
      </SimpleFadeIn>
    </div>
  );
}

export default page;
