"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import your Lottie JSON file
import yourLottieAnimation from "../../public/snake.json";

export default function Main() {
  //   const [state, setState] = useState(null);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative">
        {/* Lottie animation as background */}
        {/* {state && ( */}
        <Lottie
          animationData={yourLottieAnimation}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        {/* )} */}
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-amber-300"></div>
        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full py-3 px-3 flex items-center justify-center">
          <h1 className="text-3xl text-red-950 font-bold mb-2">
            Poi OET prepare cheyyadi pups kaichond irkkand 🤨🤨🤨
          </h1>
        </div>
      </div>
    </div>
  );
}
