import React from "react";
import styled from "styled-components";
import { IItemProps } from "./Item.types";

const Item: React.FC<IItemProps> = ({ title }) => {
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-size: 10px;
  border: 1px solid black;
  margin: 10px;
  height: 50px;
  cursor: move;
  background-color: green;
`;
export default Item;
