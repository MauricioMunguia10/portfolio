"use client";

import React from "react";
import ThreeAnimationComponent from "@/components/animacion";
import SketchComponent from "@/components/sketch";

const sketchStyle = {
  position: "fixed",
  bottom: "0",
  right: "0",
  margin: "10px",
  width: "fit-content",
};

const App = () => {
  return (
    <div className="App" style={sketchStyle}>
      <SketchComponent />
    </div>
  );
};

export default App;
