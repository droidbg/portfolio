import React from "react";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p className="text-purple-custom font-extrabold mt-10 text-[14px]">
          {progress.toFixed(2)}
        </p>
      </span>
    </Html>
  );
};

export default Loader;
