import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

const Canvas = () => {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw,}  =
    useCanvas();
    

  useEffect(() => {
    prepareCanvas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );

}

export default Canvas