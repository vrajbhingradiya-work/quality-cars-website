import { CardWithSelection } from "@/components/blocks/cardwithSelection";
import React from "react";

function SelectCarsTypeModal({ setIsModalShowing }: any) {
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black/80 flex justify-center items-center">
      <CardWithSelection setIsModalShowing={setIsModalShowing} />
    </div>
  );
}

export default SelectCarsTypeModal;
