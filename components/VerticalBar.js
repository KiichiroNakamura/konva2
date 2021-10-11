import React from "react";
import { Stage, Layer, Image, Circle, Rect, Line } from "react-konva";

export const VerticalBar = (stage) => {
  const PADDING = 5;
  const HEIGHT = 3000;
  return (
    <Rect
      stroke="black"
      strokeWidth={4}
      x={5}
      y={5}
      width={5}
      height={100}
      opacity={0.8}
      draggable={"true"}
      dragBoundFunc={(pos) => {
        console.log("x:" + pos.x + " y:" + pos.y);
        console.log("Stage width:" + stage.width + " height:" + stage.height);

        pos.x = stage.width - PADDING - 10;
        pos.y = Math.max(
          Math.min(pos.y, stage.height - 100 - PADDING),
          PADDING
        );
        return pos;
      }}
      onDragMove={() => {
        // const availableHeight =
        // stage.height() - PADDING * 2 - verticalBar.height();
        // var delta = (verticalBar.y() - PADDING) / availableHeight;
        // layer.y(-(HEIGHT - stage.height()) * delta);

        const availableHeight = 300 - PADDING * 2 - 100;
        console.log("availableHeight:" + availableHeight);
        var delta = (5 - PADDING) / availableHeight;
        stage.y = -(300 - stage.height) * delta;
      }}
    />
  );
};
