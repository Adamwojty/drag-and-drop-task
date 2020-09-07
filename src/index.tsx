import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { Provider } from "react-redux";
import Store from "./config/redux";
import App from "./App";
const backendOptions = {
  enableMouseEvents: true,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <DndProvider backend={TouchBackend} options={backendOptions}>
        <App />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
