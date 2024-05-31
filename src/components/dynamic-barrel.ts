"use client";
import dynamic from "next/dynamic";

export const ColorBlockDynamic = dynamic(() => import("./ColorBlock"), {
  ssr: true,
});
