import React from "react";
import PageNav from "./PageNav";
import FilterSection from "./FilterSection";
import Cars from "./Cars";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function Collection() {
  return (
    <div className="bg-white p-4 md:p-8 md:px-16 overflow-hidden ">
      <SimpleFadeIn sequence={4}>
        <PageNav />
      </SimpleFadeIn>
      <SimpleFadeIn sequence={8}>
        <FilterSection />
      </SimpleFadeIn>
      <SlideInFromBottom sequence={16}>
        <Cars />
      </SlideInFromBottom>
    </div>
  );
}

export default Collection;
