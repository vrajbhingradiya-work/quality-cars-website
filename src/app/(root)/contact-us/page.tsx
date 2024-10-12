import ClickToActionBtns from "@/app/components/contact-us/ClickToActionBtns";
import ContactForm from "@/app/components/contact-us/ContactForm";
import ContactInfo from "@/app/components/contact-us/ContactInfo";
import SlideInFromBottom from "@/app/components/utils/SlideInFromBottom";
import SlideInFromLeft from "@/app/components/utils/SlideInFromLeft";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8 bg-[#F2F2F2] tracking-wider">
      <SlideInFromLeft sequence={4}>
        <ContactInfo />
      </SlideInFromLeft>
      <SlideInFromLeft sequence={8}>
        <ContactForm />
      </SlideInFromLeft>
    </div>
  );
}

export default page;
