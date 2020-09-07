import { XYCoord } from "react-dnd";
import { snapToGrid } from "./snapToGrid";

export const getItemStyles = (initialOffset: XYCoord | null, currentOffset: XYCoord | null) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

  x -= initialOffset.x;
  y -= initialOffset.y;
  [x, y] = snapToGrid(x, y);
  x += initialOffset.x;
  y += initialOffset.y;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};
