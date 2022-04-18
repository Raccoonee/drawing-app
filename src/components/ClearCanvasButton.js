import React from 'react'
import { useCanvas } from './CanvasContext'
import Button from "@mui/material/Button";

const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <Button className='button' variant="contained" onClick={clearCanvas}>Clear Canvas</Button>
}

export default ClearCanvasButton