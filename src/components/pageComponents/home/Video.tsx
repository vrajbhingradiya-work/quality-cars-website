"use client";
import React from "react";

export default function VideoComponent({ src }: { src: string }) {
  return (
    <section>
      <video
        autoPlay
        loop
        muted
        width="1920"
        height="1080"
        controls
        preload="none"
      >
        <source src={src || "/car-video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Other content of the page */}
    </section>
  );
}
