import React from "react";
import LoadingIcon from "./LoadingIcon";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function LoadingPageTranstion() {
  return (
    <>
      <SimpleFadeIn sequence={0}>
        <div className="h-screen fixed top-[120px] left-0 z-40 w-full bg-white fill-black text-xl  flex items-center justify-center">
          <LoadingIcon color="black" size="70" />
        </div>
      </SimpleFadeIn>
    </>
  );
}

export default LoadingPageTranstion;
