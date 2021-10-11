import React from "react";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";
import { HorizontalBar } from "./HorizontalBar";
import { VerticalBar } from "./VerticalBar";

export const ScrollBarLayer = () => {
  const stage = {
    x: 0,
    y: 0,
    width: 300,
    height: 300
  };
  return (
    <Layer>
      {/* <VerticalBar props={props} /> */}
      <HorizontalBar props={stage} />
    </Layer>
  );
};
