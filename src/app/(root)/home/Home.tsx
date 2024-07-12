import {
  FromTheQCWorld,
  HeroBanner1,
  HeroBanner2,
  HeroBanner3,
  HomePageCarsCorousel,
} from "@/app/components";
import HowItWorksNew from "@/app/components/home/HowItWorksNew";
import React from "react";

function Home() {
  return (
    <div className="w-full">
      <HeroBanner1 />
      <HeroBanner2 />
      <HeroBanner3 />
      <HomePageCarsCorousel />
      <HowItWorksNew />
      <FromTheQCWorld />
    </div>
  );
}

export default Home;
