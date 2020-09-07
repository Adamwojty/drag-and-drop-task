import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import { ItemTypes } from "../../assets/data";
import DragItem from "./DragItem";

enum Colors {
  RED = "red",
  GREEN = "green",
}

const Header: React.FC<{}> = () => {
  const data = useSelector((state: RootStateOrAny) => state.reducer);
  const left: number = 0;
  const top: number = 0;
  const id: number = Object.keys(data).length;
  return (
    <Wrapper>
      <DragItem color={Colors.RED} id={id} itemType={ItemTypes.COLUMN_ADD} left={left} top={top} />
      <DragItem color={Colors.GREEN} id={id} itemType={ItemTypes.ITEM_ADD} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
