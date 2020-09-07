export interface IColumnProps {
  colId: number;
}
export interface IDragItem {
  id: number;
  type: string;
  title: string;
  columnId: number;
  originalIndex: number;
}
export interface IItem {
  idx: number;
  id: number;
  title: string;
}
export interface IColumnDragPreviewProps {
  id: number;
}
export interface IDraggableColumnProps {
  id: number;
  title: string;
  left: number;
}
