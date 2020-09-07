export interface IItemProps {
  title: string;
  id: number;
}
export interface IDraggableItemProps {
  id: number;
  title: string;
  left?: number;
  top?: number;
  moveItem: (id: number, to: number) => void;
  findItem: (id: number) => { index: number };
  columnId?: number;
}
export interface IColumnDragPreviewProps {
  title: string;
  id: number;
}
