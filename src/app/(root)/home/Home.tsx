import {
  FromTheQCWorld,
  HeroBanner1,
  HeroBanner2,
  HeroBanner3,
  HomePageCarsCorousel,
  HowItWorks,
} from "@/app/components";
import React from "react";

function Home() {
  return (
    <div className="w-full">
      <HeroBanner1 />
      <HeroBanner2 />
      <HeroBanner3 />
      <HomePageCarsCorousel />
      <HowItWorks />
      <FromTheQCWorld />
    </div>
  );
}

export default Home;
