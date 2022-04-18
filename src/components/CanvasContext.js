import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth -80;
    canvas.height = window.innerHeight;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";

    context.lineWidth = 5;
    contextRef.current = context;
    context.fillStyle = "#D3D3D3";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#D3D3D3";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const colors = {
    black: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#000000";
    },
    red: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#ff0000";
    },
    blue: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#0000ff";
    },
    cyan: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#00ffff";
    },
    gray: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#383838";
    },
    maroon: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#800000";
    },
    green: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#008000";
    },
    teal: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#008080";
    },
    white: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#ffffff";
    },
    lime: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#00ff00";
    },
    yellow: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#ffff00";
    },
    magenta: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#ff00ff";
    },
    orange: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#ff9900";
    },
    olive: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#808000";
    },
    purple: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#5224ce";
    },
    navy: () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#000080";
    },
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        colors,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
