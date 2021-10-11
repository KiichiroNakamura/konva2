import React from "react";
import Konva from "konva";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";

export const MizutamaLayer2 = () => {
  return (
    <Layer>
      <Circle fill="green" x={250} y={0} width={40} height={40} />
      <Circle fill="green" x={280} y={100} width={40} height={40} />
      <Circle fill="green" x={300} y={150} width={40} height={40} />
      <Circle fill="green" x={320} y={200} width={40} height={40} />
      <Circle fill="green" x={25} y={250} width={40} height={40} />
    </Layer>
  );
};
