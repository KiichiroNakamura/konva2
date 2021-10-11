import React from "react";
import Konva from "konva";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";
import { MizutamaLayer2 } from "./MizutamaLayer2";

export const MizutamaLayer = () => {
  return (
    <Layer>
      <Circle fill="red" x={0} y={0} width={40} height={40} />
      <Circle fill="red" x={10} y={100} width={40} height={40} />
      <Circle fill="blue" x={15} y={150} width={40} height={40} />
      <Circle fill="red" x={20} y={200} width={40} height={40} />
      <Circle fill="blue" x={25} y={250} width={40} height={40} />
      <Circle fill="red" x={30} y={300} width={40} height={40} />
      <Circle fill="blue" x={35} y={350} width={40} height={40} />
      <Circle fill="red" x={40} y={400} width={40} height={40} />
      <Circle fill="blue" x={45} y={450} width={40} height={40} />
    </Layer>
  );
};
