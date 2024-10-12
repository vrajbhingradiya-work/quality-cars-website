import Contact from "@/components/pageComponents/contact/Contact";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import React from "react";

function page() {
  return (
    <SlideInFromBottom sequence={2}>
      <div className="page-header-margin">
        <Contact />;
      </div>
    </SlideInFromBottom>
  );
}

export default page;
