import React, { memo } from "react";
import styled from "styled-components";
import Item from "./Item";
import { IColumnDragPreviewProps } from "./Item.types";

const DragItemPreview: React.FC<IColumnDragPreviewProps> = memo(({ title, id }) => {
  return (
    <Wrapper>
      <Item title={title} id={id} />
    </Wrapper>
  );
});
const Wrapper = styled.div`
  display: inline-block;
`;

export default DragItemPreview;
