import SpringModal from "@/components/blocks/SpringModal";
import React from "react";

function SelectCarsTypeModal({ isOpen, setIsOpen }: any) {
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black/80 flex justify-center items-center">
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default SelectCarsTypeModal;
