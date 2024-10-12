import React from "react";
import HeroSection from "./HeroSection";
import Recommendations from "./Recommendations";
import OurCollection from "./OurCollection";
import WhyChooseUs from "./WhyChooseUs";
import Banner from "./Banner";
import ScrollingTestimonials from "./Testimonials";

function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <Recommendations />
      <OurCollection />
      <WhyChooseUs />
      <Banner />
      <ScrollingTestimonials />
    </div>
  );
}

export default Home;
