import ClearCanvasButtom from "./ClearCanvasButton";

import React, { useRef, useContext, useState } from "react";
import { Button } from "@mui/material";
import "./menu.css";
import { useCanvas } from "./CanvasContext";

const Menu = () => {
  const { canvasRef, prepareCanvas, startDrawing, finishDrawing, draw, colors } =
    useCanvas();
  const [selectedColor, setSelectedColor] = useState({
    black: false,
    red: false,
    blue: false,
    cyan: false,
    silver: false,
    maroon: false,
    green: false,

  })

  const canvas = canvasRef.current;

  return (
    <>
      <div className="container">
        <div className="b">
          <div>
            <ClearCanvasButtom />
          </div>
          <div className="save-button">
            <Button variant="contained" onClick={() => {alert('Not added yet!')}}>Save Drawing</Button>
          </div>
        </div>
        <div className="c">
          <div>
            <button onClick={colors.black} class="color-buttons black"></button>
            <button onClick={colors.red} class="color-buttons red"></button>
            <button onClick={colors.blue} class="color-buttons blue"></button>
            <button onClick={colors.cyan} class="color-buttons cyan"></button>
            <button onClick={colors.orange} class="color-buttons orange"></button>
            <button onClick={colors.maroon} class="color-buttons maroon"></button>
            <button onClick={colors.green} class="color-buttons green"></button>
            <button onClick={colors.teal} class="color-buttons teal"></button>
          </div>
          <div>
            <button onClick={colors.white} class="color-buttons white"></button>
            <button onClick={colors.lime} class="color-buttons lime"></button>
            <button onClick={colors.yellow} class="color-buttons yellow"></button>
            <button onClick={colors.magenta} class="color-buttons magenta"></button>
            <button onClick={colors.gray} class="color-buttons gray"></button>
            <button onClick={colors.olive} class="color-buttons olive"></button>
            <button onClick={colors.purple} class="color-buttons purple"></button>
            <button onClick={colors.navy} class="color-buttons navy"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
