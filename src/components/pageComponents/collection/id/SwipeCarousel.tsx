import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { AnyARecord } from "dns";
import Image from "next/image";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({
  imgs = [
    "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
  ],
}: any) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden  ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex bg-black cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} images={imgs} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex, images }: any) => {
  return (
    <>
      {images?.map((image: any, idx: any) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className=" w-full shrink-0 rounded-xl  flex justify-center items-center bg-black "
          >
            <Image
              objectFit="cover"
              src={image?.data?.image?.url}
              width={550}
              height={300}
              alt="image"
              className="rounded-xl object-cover h-[225px] w-[450px] "
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  imgs,
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  imgs: Array<String>;
}) => {
  return (
    <div className=" flex w-full justify-center gap-[1px]">
      {imgs.map((_, idx: any) => {
        return (
          <button
            title="button"
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-1 w-full  transition-colors ${
              idx === imgIndex ? "bg-black" : "bg-black/50"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
