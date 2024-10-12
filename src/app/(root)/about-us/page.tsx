import BannerAboutUs from "@/app/components/about-us/BannerAboutUs";
import DedicatedServiceCentre from "@/app/components/about-us/DedicatedServiceCentre";
import IntroQualityCars from "@/app/components/about-us/IntroQualityCars";
import MotivatedTeam from "@/app/components/about-us/MotivatedTeam";
import OurUsp from "@/app/components/about-us/OurUsp";
import QCShowroom from "@/app/components/about-us/QCShowroom";
import Vision from "@/app/components/about-us/Vision";
import SimpleFadeIn from "@/app/components/utils/SimpleFadeIn";
import React from "react";

function page() {
  return (
    <div className="bg-[#F2F2F2] overflow-hidden">
      <SimpleFadeIn sequence={4}>
        <BannerAboutUs />
      </SimpleFadeIn>
      <SimpleFadeIn sequence={4}>
        <div>
          <IntroQualityCars />
          <OurUsp />
          <QCShowroom />
          {/* <DedicatedServiceCentre /> */}
          <Vision />
          <MotivatedTeam />
        </div>
      </SimpleFadeIn>
    </div>
  );
}

export default page;
