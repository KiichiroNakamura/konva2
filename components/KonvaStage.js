import React from "react";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";
import { MizutamaLayer } from "./MizutamaLayer";
import { MizutamaLayer2 } from "./MizutamaLayer2";
import { MizutamaLayer3 } from "./MizutamaLayer3";
import { ScrollBarLayer } from "./ScrollBarLayer";

export const KonvaStage = () => {
  return (
    <Stage
      x={0}
      y={0}
      width={300}
      height={300}
      style={{ border: "10px double red" }}
    >
      <ScrollBarLayer props={{ Stage }} />
      <MizutamaLayer />
      <MizutamaLayer2 />
      {/* <MizutamaLayer3 /> */}
    </Stage>
  );
};
