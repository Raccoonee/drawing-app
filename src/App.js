import React from "react";
import { Canvas } from "./Canvas";
import { ClearCanvasButton } from "./ClearCanvasButton";

function App() {
  return (
    <>
      <ClearCanvasButton />
      <Canvas />
      <div className="bottom-header">
      
      <p>
        <a href="https://github.com/Raccoonee">GitHub</a>
      </p>
      <h2>Created by Raccoonee🦝</h2>
      <p>
        <a href="https://www.youtube.com/channel/UCIwswzNBnEwyWFRNBZ_lbsw">
          Youtube
        </a>
      </p>
    </div>
    </>
  );
}

export default App;
