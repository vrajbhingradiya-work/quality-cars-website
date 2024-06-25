import BannerFaqs from "@/app/components/faqs/BannerFaqs";
import { Faqs } from "@/app/components/faqs/Faqs";
import StillHaveADoubt from "@/app/components/faqs/StillHaveADoubt";
import SimpleFadeIn from "@/app/components/utils/SimpleFadeIn";
import React from "react";

function page() {
  return (
    <div>
      <SimpleFadeIn sequence={4}>
        <BannerFaqs />
      </SimpleFadeIn>

      <Faqs />

      <StillHaveADoubt />
    </div>
  );
}

export default page;
