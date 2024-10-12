"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import SlideToLeft from "@/components/utils/SlideToLeft";
import SlideToRight from "@/components/utils/SlideToRight";

function CarView({ image }: any) {
  return (
    <div className="content-box flex justify-center items-center grid-cols-3 gap-4">
      <SlideToLeft sequence={2}>
        <Image src={image} alt="car image" className="object-cover w-[600px]" />
      </SlideToLeft>
      <SlideInFromBottom sequence={6}>
        <Image src={image} alt="car image" className="object-cover w-[600px]" />
      </SlideInFromBottom>
      <SlideToRight sequence={2}>
        <Image src={image} alt="car image" className="object-cover w-[600px]" />
      </SlideToRight>
    </div>
  );
}

export default CarView;
