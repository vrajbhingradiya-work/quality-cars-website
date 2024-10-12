"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const HowItWorksNew = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 bg-white">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="text-black text-4xl font-bold mb-8">HOW IT WORKS</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "142px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-gray-900 to-black bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-gray-600 to-gray-900 text-white"
        >
          <Link href="/collection">
            <span>Learn more</span>
          </Link>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-gray-600 to-black"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default HowItWorksNew;

const solutions = [
  {
    id: 1,
    title: "BROWSE FROM OUR COLLECTION",
    description: "",
    imgSrc: "https://i.ibb.co/71gSxJG/browse-from-our-collection.jpg",
  },
  {
    id: 2,
    title: "GET TO KNOW YOUR RIDE",
    description: "",
    imgSrc: "https://i.ibb.co/Lkwj2Gc/get-to-know-your-ride.jpg",
  },
  {
    id: 3,
    title: "VISIT SHOWROOM",
    description: "",
    imgSrc: "https://i.ibb.co/313HK6t/instant-payment-and-transfer.jpg",
  },
  {
    id: 4,
    title: "INSTANT PAYMENTS & EASY FINANCE",
    description: "",
    imgSrc: "https://i.ibb.co/BrqVQ3y/visit-showroom.jpg",
  },
];
