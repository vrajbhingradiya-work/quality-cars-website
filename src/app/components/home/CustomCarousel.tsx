"use client";
import React, { useRef, useEffect } from "react";

function CustomCarousel(props: any) {
  const slider = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const sliderRef = slider.current;

    if (sliderRef) {
      const handleMouseDown = (e: MouseEvent) => {
        isDown.current = true;
        startX.current = e.pageX - sliderRef.offsetLeft;
        scrollLeft.current = sliderRef.scrollLeft;
      };

      const handleMouseLeave = () => {
        isDown.current = false;
      };

      const handleMouseUp = () => {
        isDown.current = false;
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.offsetLeft;
        const walk = x - startX.current;
        sliderRef.scrollLeft = scrollLeft.current - walk;
      };

      sliderRef.addEventListener("mousedown", handleMouseDown);
      sliderRef.addEventListener("mouseleave", handleMouseLeave);
      sliderRef.addEventListener("mouseup", handleMouseUp);
      sliderRef.addEventListener("mousemove", handleMouseMove);

      return () => {
        sliderRef.removeEventListener("mousedown", handleMouseDown);
        sliderRef.removeEventListener("mouseleave", handleMouseLeave);
        sliderRef.removeEventListener("mouseup", handleMouseUp);
        sliderRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="items gap-8 md:gap-12  " ref={slider}>
      {props.children}
    </div>
  );
}

export default CustomCarousel;
