export const snapToGrid = (x: number, y: number): [number, number] => {
  const snappedX = Math.round(x / 40) * 40;
  const snappedY = Math.round(y / 30) * 30;
  return [snappedX, snappedY];
};
