"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";

function CarView({ image }: any) {
  return (
    <SlideInFromBottom sequence={4}>
      <motion.div className="content-box flex justify-center items-center">
        <Image src={image} alt="car image" className="object-cover w-[600px]" />
      </motion.div>
    </SlideInFromBottom>
  );
}

export default CarView;
