export interface IColumnProps {
  id: number;
}
export interface IDragItem {
  id: number;
  type: string;
  title: string;
  columnId: number;
}
export interface IItem {
  idx: number;
  title: string;
}
export interface IColumnDragPreviewProps {
  id: number;
}
export interface IDraggableColumnProps {
  id: number;
  title: string;
  left: number;
  top: number;
}
