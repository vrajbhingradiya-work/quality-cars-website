"use client";
import type {} from "ldrs";

import { useEffect } from "react";

export default function LoadingIcon({ color, size }: any) {
  useEffect(() => {
    import("ldrs")
      .then((ldrs) => {
        ldrs.lineSpinner.register();
      })
      .catch((error) => {
        console.error("Error loading ldrs:", error);
      });
  }, []);

  return (
    <l-line-spinner
      color={color}
      size={size}
      stroke="3"
      speed="1"
      // color="white"
    ></l-line-spinner>
  );
}
