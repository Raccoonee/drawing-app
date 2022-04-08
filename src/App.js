import React from "react";
import { Canvas } from "./components/Canvas";
import ClearCanvasButton from "./components/ClearCanvasButton";
import ColorSelection from "./components/ColorSelection";
import './App.css'
function App() {
  return (
    <>
      <div className="menu">
        <ClearCanvasButton />
        <ColorSelection />
      </div>
      <div className="canvas">
        <Canvas />
      </div>

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
