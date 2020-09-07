import React, { memo } from "react";
import Column from "./Column";
import styled from "styled-components";
import { IColumnDragPreviewProps } from "./Column.types";

const ColumnDragPreview: React.FC<IColumnDragPreviewProps> = memo(({ id }) => {
  return (
    <Wrapper>
      <Column colId={id} />
    </Wrapper>
  );
});
const Wrapper = styled.div`
  display: inline-block;
`;

export default ColumnDragPreview;
