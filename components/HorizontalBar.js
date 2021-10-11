import React, { useMemo } from "react";
import { Stage, Layer, Image, Circle, Rect, Line } from "react-konva";

export const HorizontalBar = (stage) => {
  const PADDING = 5;
  const HEIGHT = 3000;

  console.log("HorizontalBar stage.height:" + stage.height);

  // const aaa = () => {
  //   const availableHeight = 300 - PADDING * 2 - 300;
  //   var delta = (5 - PADDING) / availableHeight;
  //   stage.x = -(300 - stage.width) * delta;
  // };

  return (
    <Rect
      stroke="grey"
      strokeWidth={4}
      x={5}
      y={5}
      width={100}
      height={10}
      opacity={0.8}
      draggable={"true"}
      dragBoundFunc={(pos) => {
        console.log("x:" + pos.x + " y:" + pos.y);
        //console.log("Stage width:" + stage.width + " height:" + stage.height);

        pos.y = stage.height - PADDING - 10;
        pos.x = Math.max(Math.min(pos.x, stage.width - 100 - PADDING), PADDING);
        return pos;
      }}

      //dragBoundFunc={aaa}
    />
  );
};
