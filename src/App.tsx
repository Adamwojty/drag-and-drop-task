import React from "react";
import styled from "styled-components";
import DiagramingSpace from "./components/DiagramingSpace/DiagramingSpace";
import Header from "./components/Header/Header";
import DragLayer from "./components/DiagramingSpace/DragLayer";

const App: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header />
      <DiagramingSpace />
      <DragLayer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid black;
  margin: 50px auto;
  width: 800px;
  padding: 10px;
  background-color: grey;
  @media (max-width: 900px) {
    width: 80vw;
  }
`;

export default App;
