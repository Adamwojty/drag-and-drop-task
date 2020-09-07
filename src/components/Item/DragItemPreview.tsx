import React, { memo } from "react";
import styled from "styled-components";
import Item from "./Item";
import { IItemProps } from "./Item.types";

const DragItemPreview: React.FC<IItemProps> = memo(({ title }) => {
  return (
    <Wrapper>
      <Item title={title} />
    </Wrapper>
  );
});
const Wrapper = styled.div`
  display: inline-block;
`;

export default DragItemPreview;
