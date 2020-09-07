export interface IItemProps {
  title: string;
}
export interface IDraggableItemProps {
  id: number;
  title: string;
  left?: number;
  top?: number;
  moveItem: (id: number, to: number, colId: number) => void;
  findItem: (id: number, colId: number) => { index: number };
  columnId: number;
}
export interface IDragItem {
  id: number;
  type: string;
  title: string;
  columnId: number;
  originalIndex: number;
}
