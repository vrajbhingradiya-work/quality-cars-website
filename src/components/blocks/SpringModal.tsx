import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FiAlertCircle } from "react-icons/fi";

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const card = {
    command: "Hey there!",
    title:
      "Please take a moment to select the car type that best matches your interest and preferences. ",
    option1: { title: "Pre-owned Cars", href: "/collection" },
    option2: { title: "New Cars", href: "/new-cars" },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-600 to-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-gray-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                {card.command}
              </h3>
              <p className="text-center mb-6">{card.title}</p>
              <div className="flex gap-2">
                <Link href={card.option1.href} className="w-full">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    {card.option1.title}
                  </button>
                </Link>
                <Link href={card.option2.href} className="w-full">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-gray-600 font-semibold w-full py-2 rounded"
                  >
                    {card.option2.title}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
