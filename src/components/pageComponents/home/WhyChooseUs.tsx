"use client";
import Image from "next/image";
import React from "react";
import image from "../../../assets/images/2-cars.jpg";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import { motion } from "framer-motion";
function WhyChooseUs() {
  return (
    <div className="h-full w-full py-16">
      <div className="content-box">
        <div className="flex flex-col gap-8 ">
          <span className="text-9xl pl-8 xl:pl-0">
            <SlideInFromBottom sequence={2}>
              <span>Why Choose Us?</span>
            </SlideInFromBottom>
          </span>
          <div className="relative max-h-[850px] h-[80vh]">
            <Image
              className="object-cover h-full w-full "
              src={image}
              alt="image"
            />
            <div className="absolute top-0 left-0 h-full w-full grid grid-cols-3 gap-6 overflow-hidden ">
              <motion.div
                variants={boxAnimation2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-start items-start flex-col gap-4 bg-white   "
              >
                <span className="text-3xl">Unrivaled Selection</span>
                <span className="text-3xl">
                  {
                    "Discover a curated selection of the world's most prestigious automotive brands"
                  }
                </span>
              </motion.div>
              <motion.div
                variants={boxAnimation1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-start items-start flex-col gap-4 bg-white   "
              >
                <span className="text-3xl">Unrivaled Selection</span>
                <span className="text-3xl">
                  {
                    "Discover a curated selection of the world's most prestigious automotive brands"
                  }
                </span>
              </motion.div>

              <motion.div
                variants={boxAnimation2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-start items-start flex-col gap-4 bg-white   "
              >
                <span className="text-3xl">Unrivaled Selection</span>
                <span className="text-3xl">
                  {
                    "Discover a curated selection of the world's most prestigious automotive brands"
                  }
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

const boxAnimation1 = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  visible: {
    opacity: 0.7,
    y: 0,

    transition: {
      delay: 0.1,
      duration: 1,
      stiffness: 100,
      ease: "easeInOut",
    },
  },
};
const boxAnimation2 = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 0.7,

    y: 0,
    transition: {
      delay: 0.1,
      duration: 1,
      stiffness: 100,
      ease: "easeInOut",
    },
  },
};
