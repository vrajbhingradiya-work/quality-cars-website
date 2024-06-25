import SimpleFadeIn from "@/app/components/utils/SimpleFadeIn";
import SlideInFromBottom from "@/app/components/utils/SlideInFromBottom";
import BannerWallpaper from "@/app/components/wallpaper/BannerWallpaper";
import React from "react";

function page() {
  return (
    <div>
      <SimpleFadeIn sequence={2}>
        <BannerWallpaper />
      </SimpleFadeIn>
      <SlideInFromBottom sequence={6}>
        <div className="h-screen flex items-center justify-center text-3xl md:text-5xl">
          <div className="">COMING SOON!</div>
        </div>
      </SlideInFromBottom>
    </div>
  );
}

export default page;
